/* Provider per gestire lo stato delle pellicole */

import { useState, useEffect } from 'react'
import MoviesContext from '../store/movies-context'

import useFetch from '../hooks/useFetch'

export default function MoviesContextProvider({ children }) {
  const [moviesList, setMoviesList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = useFetch('movie/popular')

  useEffect(() => {
    if (!moviesList) return
    localStorage.setItem('savedMovies', JSON.stringify(moviesList))
  }, [moviesList])

  const ctx = {
    moviesList: data?.results || [],
    data,
    setMoviesList,
    // favoriteMovies: [],
    // handleFavourite,
    searchTerm,
    setSearchTerm,
    // filteredMovies,
    error,
    loading: isLoading,
  }
  return <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
}
