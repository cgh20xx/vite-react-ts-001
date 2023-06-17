import { useEffect, useState } from "react"

// ======================= fake api ========================

function getCurrentScore() {
  return 99
}

function getScoreByBoardName(boardName: string) {
  if (boardName === 'boardA') {
    return 200
  } 
  if (boardName === 'boardB') {
    return 300
  } 
  return 0
}

// ======================= two function component ========================

const ScoreBoardA: React.FC = () => {
  const [score, setScore] = useState(10)
  useEffect(() => {
    console.log('ScoreBoardA 代入空陣列，只會動一次');
    const currentScore = getCurrentScore() + getScoreByBoardName('BoardB')
    setScore(currentScore)
  }, [])
  return <p>board a {score}</p>
}

const ScoreBoardB: React.FC = () => {
  const [score, setScore] = useState(880)
  useEffect(() => {
    console.log('ScoreBoardB 代入空陣列，只會動一次');
    const currentScore = getCurrentScore() + getScoreByBoardName('BoardB')
    setScore(currentScore)
  }, [])
  return <p>board a {score}</p>
}


const Main: React.FC = () => {
  return (
    <>
      <ScoreBoardA />
      <ScoreBoardB />
    </>
  )
}

export default Main