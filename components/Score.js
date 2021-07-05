import PropTypes from 'prop-types'

const Score = ({ id, playedAt, totalScore, userName }) => {
  return (
    <div className="p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      <div className="italic text-gray-400">
        {playedAt}
      </div>
      <div>
        {`${userName} posted a score of ${totalScore}`}
      </div>
    </div>
  )
}

export default Score
