/* Utile per dare un layout coerente (larghezza massima, padding, centratura) a qualunque pagina lo utilizzi. */

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;