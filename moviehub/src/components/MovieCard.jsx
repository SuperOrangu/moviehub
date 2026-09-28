/* Props title/year/poster -> <article> */
/* Watched (ternario) + genre (&&) */
/* Pulsante "preferito", funzione passata come prop dal Provider, classe dinamica "movie-card--favorite" */
/* Niente più props "funzione" da App -> usiamo useContext */
/* La card è un Link verso /movies/:id invece di gestire il click */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

function MovieCard({ movie }) {
  const { toggleFavorite } = useContext(MoviesContext);
  const { id, title, year, poster, genre, watched, favorite } = movie;

  // Evita che il click sul pulsante attivi anche il Link della card
  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <article className={`movie-card${favorite ? " movie-card--favorite" : ""}`}>
      <Link to={`/movies/${id}`} className="movie-card__link">
        <img className="movie-card__poster" src={poster} alt={`Locandina di ${title}`} />
        <div className="movie-card__body">
          <h3 className="movie-card__title">{title}</h3>
          <p className="movie-card__year">{year}</p>
          <p className="movie-card__status">{watched ? "✅ Visto" : "👀 Da vedere"}</p>
          {genre && <span className="movie-card__badge">{genre}</span>}
        </div>
      </Link>
      <button
        type="button"
        className="movie-card__favorite-btn"
        onClick={handleFavoriteClick}
      >
        {favorite ? "★ Preferito" : "☆ Preferito"}
      </button>
    </article>
  );
}

export default MovieCard;