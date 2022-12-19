import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useIndividualScores from '../../lib/useIndividualScore'

const UserScore = () => {
  const router = useRouter()
  const { id } = router.query
  const { golferData, error } = useIndividualScores(id)
  let scores = null
  let playerName = null

  if ( golferData ){
    scores = golferData.scores
    playerName = golferData.playerName
  }

  return (
    <Layout>
      <h1>{playerName}</h1>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget />
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>

    </Layout>
  )

}

export default UserScore
