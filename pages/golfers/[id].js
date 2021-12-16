import Layout from "../../components/Layout";
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useScoresOfGolfer from '../../lib/useScoresOfGolfer'
import { useRouter } from 'next/router'

export default function Golfer() {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useScoresOfGolfer(id)
  
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