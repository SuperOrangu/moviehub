/* Componente Layout per la struttura principale dell'app */

import { Outlet, NavLink } from 'react-router-dom'
export default function Layout() {
  return (
    <main>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </nav>
      <Outlet />
      <footer style={{ textAlign: 'center', margin: '2rem 0' }}>
        Moviehub® - All rights reserved {new Date().getFullYear()}
      </footer>
    </main>
  )
}