import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { setUserData } from '../../lib/userAuth'
import { getUsername } from '../../lib/userAuth'
import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useIndividualScores from '../../lib/useIndividualScore'

const UserScore = () => {
  const { scores, error } = useIndividualScores()
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

export default UserScore
