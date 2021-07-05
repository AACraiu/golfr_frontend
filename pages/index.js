import Layout from '../components/Layout'
import Score from '../components/Score'
import useScores from '../lib/useScores'

const Home = () => {
  const { scores, error } = useScores()

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          scores && scores.map(score => (
            <Score
              key={score.id}
              totalScore={score.total_score}
              playedAt={score.played_at}
              userName={score.user_name}
            />
          ))
        )}
      </>
    </Layout>
  )
}

export default Home
