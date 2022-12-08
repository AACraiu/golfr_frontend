import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import { useGolferScores } from '../../lib/useScores'

const User = () => {
  const router = useRouter()
  const { uid } = router.query
  const { scores, error } = useGolferScores(uid)

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
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

export default User
