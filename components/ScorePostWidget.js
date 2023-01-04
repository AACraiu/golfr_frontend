import { useState, useCallback } from 'react'
import { Collapse } from 'react-collapse'
import useScorePost from '../lib/useScorePost'

const TODAY = new Date().toISOString().slice(0, 10)

const ScorePostWidget = () => {
  const [ open, setOpen ] = useState(false)
  const onClick = useCallback(
    () => setOpen(!open),
    [ open, setOpen ]
  )

  const [ totalScore, setTotalScore ] = useState(80)
  const [ numberOfHoles, setNumberOfHoles ] = useState(18)
  const [ playedAt, setPlayedAt ] = useState(TODAY)

  const { postScore } = useScorePost()

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      postScore(totalScore, playedAt, numberOfHoles)
      setOpen(false)
    },
    [ totalScore, playedAt, numberOfHoles, postScore ]
  )

  return (
    <div>
      <div
        className="underline cursor-pointer"
        onClick={onClick}
        role="switch"
      >
        Want to post a score?
      </div>
      <Collapse isOpened={open}>
        <form onSubmit={onSubmit}>
          <div className="border border-dashed border-gray-300 p-3 my-1 lg:w-1/3 md:w-1/2">
            <div>
              Total Score
              <input
                type="number"
                name="total_score"
                value={totalScore}
                onChange={e => setTotalScore(e.target.value)}
                min="20" max="140"
                className="form-input h-8 w-20 ml-3 my-2"
              />
            </div>
            <div>
              Played Date
              <input
                type="date"
                name="played_at"
                value={playedAt}
                onChange={e => setPlayedAt(e.target.value)}
                max={TODAY}
                className="form-input h-8 ml-3 my-2"
              />
            </div>
            <div>
              Number of holes
              <input
                type="number"
                name="total_score"
                value={numberOfHoles}
                onChange={e => setNumberOfHoles(e.target.value)}
                list="defaultNumbers"
                className="form-input h-8 w-20 ml-3 my-2"
              />
              <datalist id="defaultNumbers">
                <option value="9"></option>
                <option value="18"></option>
              </datalist>
            </div>
            <button className="w-40 p-1 my-2 bg-gray-200 rounded-lg">
              Post
            </button>
          </div>
        </form>
      </Collapse>
    </div>
  )
}

export default ScorePostWidget
