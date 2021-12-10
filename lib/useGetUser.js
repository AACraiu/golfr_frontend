import useSWR from 'swr'
import { getToken } from './userAuth'

export const url = `${process.env.NEXT_PUBLIC_API_URL}/show`

const useGetUser = userId => {
  const fetcher = async url => {
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('En error occurred while fethching the user')

      error.inof = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.user)
  }

  const urlUser = url + '/' + userId

  if ( userId ) {
    const { data, error } = useSWR(urlUser, fetcher)

    return {
      user: data,
      error: error && error.message,
    }
  } else {
    return {
      user: [],
      error: "invalid id",
    }
  }
}

export default useGetUser
