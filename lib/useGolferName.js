import { getToken } from './userAuth'
import useSWR from 'swr'

const USER_URL = userID => `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}`

const useGolferName = userID => {

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


    return res.json().then(data => data.name)
  }

  const { data, error } = useSWR(USER_URL(userID), fetcher)

  return {
    name: data,
    errorName: error && error.message,
  }

}

export default useGolferName
