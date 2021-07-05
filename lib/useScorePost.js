import { getToken } from './userAuth'

const useScorePost = () => {
  const postScore = async (totalScore, playedAt) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/scores`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: {
          total_score: totalScore,
          played_at: playedAt,
        },
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors[0])
      } else {
        alert('Score posted successfully')
      }
    })
    .catch(e => {
      alert(e)
    })
  }

  return {
    postScore,
  }
}

export default useScorePost
