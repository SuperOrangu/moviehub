// Avvolgiamo App con il Provider così tutti i componenti discendenti possono leggere movies/isLoading/error e le funzioni con useContext(MoviesContext), senza prop drilling.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MoviesContextProvider } from "./context/MoviesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </StrictMode>
);