import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useSWR from 'swr'
import { userScoresShow } from '../../lib/userScoresShow'

const GolferPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(id ?
    `${process.env.NEXT_PUBLIC_API_URL}/scores/${id}` : null, userScoresShow)

  return (
    <Layout>
      <>
        { error ? (
          <h2>{error.message}</h2>
        ) : (
          <>
            {data && <h1 className="uppercase py-10">{data.name}</h1>}
            {data && data.scores.map(score => (
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

export default GolferPage