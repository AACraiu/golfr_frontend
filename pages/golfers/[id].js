import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import useScores from '../../lib/useScores'
import ScoreCard from '../../components/ScoreCard'

const GolferDetailPage = () => {
  const [ userData, setUserData ] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const { scores } = useScores()

  useEffect(() => {
    if (id) {
      fetchUserData(id)
    }
  }, [ id ])

  const fetchUserData = id => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/retrieve_user_data/${id}`, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => setUserData(data))
      .catch(error => {
        console.error('Error fetching user data:', error)
        setUserData(null)
      })
  }

  return (
    <Layout>
      {userData !== null ? (
        <div>
          <p>{userData.name} scores:</p><br />
          {scores &&
            scores
              .filter(score => score.user_id === userData.id)
              .map(score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={score.user_name}
                />
              ))}
        </div>
      ) : userData === undefined ? (
        <p>Loading...</p>
      ) : (
        <p>Error loading user. (User might not exist)</p>
      )}
    </Layout>
  )
}

export default GolferDetailPage
