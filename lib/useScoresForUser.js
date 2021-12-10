import useSWR from 'swr'
import { getToken } from './userAuth'

export const SCORES_FOR_USER = `${process.env.NEXT_PUBLIC_API_URL}/scores`

const useScoresForUser = userId => {
  const fetcher = async url => {
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')

      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.scores)
  }

  const url = SCORES_FOR_USER + '/' + userId

  if ( userId ) {
    const { data, error } = useSWR(url, fetcher)

    return {
      scores: data,
      error: error && error.message,
    }
  } else {
    return {
      scores: [],
      error: "invalid id"
    }
  }
}

export default useScoresForUser
