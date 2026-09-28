import { createContext } from 'react'

const MoviesContext = createContext(null)

export default MoviesContext

// ⚠️ Intro a custom hooks

// import { createContext, useContext } from 'react'

// const MoviesContext = createContext(null)

// export function useMovies() {
//   const ctx = useContext(MoviesContext)
//   if (!ctx) throw new Error('useMovies deve essere usato dentro MoviesContextProvider')
//   return ctx
// }

// ⬇ Da qui:
// - Si sostituisce in App.js import del movie context con
// import { useMovies } from './store/movies-context'
// ...
// const moviesCtx = useMovies()