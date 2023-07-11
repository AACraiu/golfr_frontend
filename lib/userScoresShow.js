import { getToken } from './userAuth'

export const userScoresShow = async url => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  if (!response.ok) {
    throw new Error('An error ocurred whilst fetching the information for the current user')
  }

  return response.json()
}


