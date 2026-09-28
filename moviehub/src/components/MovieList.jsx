/* Riceve l'array di film via props e genera una MovieCard per ognuno con .map(), ricordando la prop "key". */

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="movie-list__empty">Nessun film trovato.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;