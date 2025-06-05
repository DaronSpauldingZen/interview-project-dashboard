import { useState, useEffect } from 'react'
import { request } from 'graphql-request'

export function useQuery(query, variables = {}) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await request('http://localhost:3000/graphql', query, variables)
        setData(result)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query, JSON.stringify(variables)])

  return { data, isLoading, error }
} 