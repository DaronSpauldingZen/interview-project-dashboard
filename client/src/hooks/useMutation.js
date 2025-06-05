import { useState } from 'react'
import { request } from 'graphql-request'

export function useMutation(mutation) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const mutate = async (variables) => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await request('http://localhost:3000/graphql', mutation, variables)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { mutate, isLoading, error }
} 