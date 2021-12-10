import { useRouter } from 'next/router'
import { useState } from 'react'

import useGetUser from '../../lib/useGetUser'
import useGetScores from  '../../lib/useScoresForUser'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'

const GolferPage = () => {
  const router = useRouter()
  const { id } = router.query

  let { user, error: errorUser } = useGetUser(id)
  let { scores, error: errorScores } = useGetScores(id)

  return (
    <>
      <Layout>
        { errorUser ? (
          errorUser
        ) : (
          <>
            { user && (
              <div className="text-2xl">
                <h1>{user.name}</h1>
              </div>
            )}
          </>
        )}
        <ul>
          <>
            {errorScores ? (
              errorScores
            ) : (
              <>
                {scores && scores.map(score => (
                  <ScoreCard
                    key={score.id}
                    id={score.id}
                    totalScore={score.total_score}
                    playedAt={score.played_at}
                    userId={user.id}
                    userName={user.name}
                  />
                ))}
              </>
            )}
          </>
        </ul>
      </Layout>
    </>
  )
}



export default GolferPage
