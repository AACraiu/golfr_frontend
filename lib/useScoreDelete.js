import { useCallback } from 'react'
import { mutate } from 'swr'
import { getToken } from './userAuth'
import { FEED_URL } from './useScores'

const useScoreDelete = id => {
  const deleteScore = useCallback(
    async () => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/scores/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .then(data => {
          if (data.errors) {
            alert(data.errors[0])
          } else {
            mutate(FEED_URL)
          }
        })
        .catch(e => {
          alert(e)
        })
    },
    [ id ]
  )

  return {
    deleteScore,
  }
}

export default useScoreDelete
