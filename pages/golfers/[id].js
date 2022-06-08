import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useGolferName from '../../lib/useGolferName'
import useGolferScores from '../../lib/useGolferScores'
import ScorePostWidget from '../../components/ScorePostWidget'

const GolferScores = () => {
  const router = useRouter()
  const { id } = router.query
  const { name, errorName } = useGolferName(id)
  const { scores, errorScores } = useGolferScores(id)

  return (
    <Layout>
      { (errorName || errorScores) ? (
        errorName
      ) : (
        name && (
          <>
            <h1> {name}{"'"} scores: </h1>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={name}
              />
            ))}
          </>
        )
      )}
    </Layout>
  )
}

export default GolferScores
