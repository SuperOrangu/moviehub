/* Pagina per visualizzare i film */

import { useContext } from 'react'

import MoviesContext from '../store/movies-context'

import Container from '../components/Container'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'

export default function HomePage() {
  const moviesCtx = useContext(MoviesContext)

  const { handleFavourites, moviesList } = moviesCtx

  return (
    <Container>
      <div className='flex'>
        <SearchBar />
      </div>
      <MovieList movies={moviesList} onClick={(e) => handleFavourites(e)} />
    </Container>
  )
}