/* Hook per fetchare i dati da un endpoint API */

import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!url) return

    const getData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://api.themoviedb.org/3/${url}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDU1M2VmZWMwNzRjOGJjZGM2YzFlMDJmODZjZTgwNSIsIm5iZiI6MTc0ODY4NDg0OC4xNjIsInN1YiI6IjY4M2FkMDMwZGFhNzJmZmMzN2ZkYTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q2YnB5D7gwHFSwZ9z2M66q308tt-Y1r97CGjw9cGOhU',
          },
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.status_message)
        }

        const result = await res.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [url])

  return { data, isLoading, error }
}