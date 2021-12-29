import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useScoresGolfer from '../../lib/useScoresGolfer'
import { useRouter } from 'next/router'
import useUser from '../../lib/useUser'

const GolferScores = () => {
  const router = useRouter()
  const { id } = router.query

  const { user, errorUser } = useUser(id)
  const { scores, error } = useScoresGolfer(id)

  return (
    <Layout>
      <>
        {
          errorUser ? (
            errorUser
          ) : (
            <>
              {
                user &&
                <h1 className="text-3xl">{`The scores of golfer ${user.name}`}</h1>
              }
            </>
          )
        }
      </>
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

export default GolferScores
