import { getToken } from './userAuth'
import useSWR from 'swr'

const USER_SCORES_URL = userID => `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}/scores`

const useGolferScores = userID => {

  const fetcher = async url => {
    const res = await fetch(url, {
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

  const { data, error } = useSWR(USER_SCORES_URL(userID), fetcher)

  return {
    scores: data,
    errorScores: error && error.message,
  }

}

export default useGolferScores
