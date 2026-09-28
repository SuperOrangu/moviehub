import { createContext, useEffect, useState } from "react";
import sampleMovies from "../data/movies";

export const MoviesContext = createContext(null);

const STORAGE_KEY = "moviehub-movies";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

// Trasforma un risultato dell'API TMDB nel formato usato dall'app.
function mapTmdbMovie(raw) {
  return {
    id: raw.id,
    title: raw.title,
    year: raw.release_date ? raw.release_date.slice(0, 4) : "—",
    poster: raw.poster_path
      ? `https://image.tmdb.org/t/p/w500${raw.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Poster",
    genre: "",
    watched: false,
    favorite: false,
  };
}

// LocalStorage non disponibile o dati corrotti: ignora e usa il fallback
function readFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState(() => readFromStorage() ?? sampleMovies);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Se non abbiamo già dei dati salvati dall'utente in localStorage, andiamo a prenderli dall'API di The Movie Database.
  useEffect(() => {
    if (readFromStorage()) return; // Rispetta i preferiti/visti già salvati.

    async function fetchPopularMovies() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Errore API: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results.map(mapTmdbMovie));
      } catch (err) {
        setError(err.message ?? "Errore sconosciuto durante il caricamento dei film.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPopularMovies();
  }, []);

  // Ogni volta che "movies" cambia, lo salviamo in localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    } catch {
      // Se lo storage è pieno o non disponibile, si ignora.
    }
  }, [movies]);

  // Non mutiamo mai l'array, creiamo sempre una nuova copia con .map() usando la forma funzionale di setMovies.
  function toggleFavorite(id) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  }

  function toggleWatched(id) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  const value = { movies, isLoading, error, toggleFavorite, toggleWatched };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}