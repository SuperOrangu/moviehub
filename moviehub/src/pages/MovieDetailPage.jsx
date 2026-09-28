/* Pagina per visualizzare i dettagli di un film */

import { useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'

import Container from '../components/Container'
export default function MovieDetailPage() {
  const { movieId } = useParams()

  const { data: movie, isLoading, error } = useFetch(`movie/${movieId}`)

  return (
    <Container>
      {error && <p>{error}</p>}
      {isLoading && <p>Please wait...</p>}
      {movie && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div style={{ width: '50%', padding: '3rem' }}>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </Container>
  )
}