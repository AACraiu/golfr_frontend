import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useScoresGolfer from '../../lib/useScoresGolfer'
import { useRouter } from 'next/router'

const GolferScores = () => {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useScoresGolfer(id)

  return (
    <Layout>
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

export default GolferScores
