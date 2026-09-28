/* Pagina per la gestione degli errori 404 */

import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <Container>
      <h1>The page you're looking for does not exist.</h1>
      <h3>
        Go back to <Link to='/'>Homepage</Link>
      </h3>
    </Container>
  )
}