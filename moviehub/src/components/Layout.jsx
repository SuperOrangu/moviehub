/* Componente "contenitore" di tutte le route, 
con barra di navigazione e <Outlet /> dove viene renderizzata la pagina attiva. */

import { NavLink, Outlet } from "react-router-dom";
import Container from "./Container";

function Layout() {
  return (
    <>
      <header className="navbar">
        <Container>
          <nav className="navbar__nav">
            <span className="navbar__brand">🎬 MovieHub</span>
            <NavLink to="/" end className="navbar__link">
              Home
            </NavLink>
            <NavLink to="/favorites" className="navbar__link">
              Preferiti
            </NavLink>
          </nav>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Layout;