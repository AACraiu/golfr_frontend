import useScores from '../lib/useScores'

const Home = () => {
  const { scores, error } = useScores()

  return (
    <div className="p-10">
      <h1 className="text-2xl">Golfr 🏌️</h1>
      {error ? (
        error
      ) : (
        scores && scores.map(score => (
          <div key={score.id} className="p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
            <div className="italic text-gray-400">
              {score.played_at}
            </div>
            <div>
              {`${score.user_name} posted a score of ${score.total_score}`}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
