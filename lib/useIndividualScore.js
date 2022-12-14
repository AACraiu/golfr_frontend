import useSWR from 'swr'
import { getToken } from './userAuth'

import { useState, useEffect } from 'react'
export const FEED_URL = `${process.env.NEXT_PUBLIC_API_URL}/user_scores`
import { getUsername } from '../lib/userAuth'

const useIndividualScores = () => {
  const [ username, setUsername ] = useState('')
  useEffect(() => setUsername(getUsername()), [])

  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      }
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.scores)
  }
    const url = FEED_URL + '/' + username
  const { data, error } = useSWR(url, fetcher)

  return {
    scores: data,
    error: error && error.message,
  }
}

export default useIndividualScores
