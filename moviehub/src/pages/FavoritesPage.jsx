/* Pagina per visualizzare i film preferiti */

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import MoviesContext from '../store/movies-context'

import Container from '../components/Container'
import MovieList from '../components/MovieList'

export default function FavoritesPage() {
  const moviesCtx = useContext(MoviesContext)

  const { favoriteMovies, handleFavourites } = moviesCtx

  return (
    <Container>
      {favoriteMovies.length > 0 ? (
        <MovieList
          movies={favoriteMovies}
          onClick={(e) => handleFavourites(e)}
        />
      ) : (
        <div className='min-h-screen'>
          <h1>
            Looks like you have no favorites movies,{' '}
            <Link to='/'>go back to homepage</Link> and add some
          </h1>
        </div>
      )}
    </Container>
  )
}