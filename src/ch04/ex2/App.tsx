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

// 自定義 hook (類似 class HOC)
// React hook 規定要使用 use 開頭
function useGetTotalScore(boardName: string) {
  const [score, setScore] = useState(0)
  useEffect(() => {
    console.log('useEffect: [boardName]');
    const currentScore = getCurrentScore() + getScoreByBoardName(boardName)
    setScore(currentScore)
  }, [boardName])
  return score
}

// ======================= two function component ========================
// React 件組名稱必須大寫開頭
const ScoreBoardA: React.FC = () => {
  // const [score, setScore] = useState(0)
  // useEffect(() => {
  //   console.log('ScoreBoardA 代入空陣列，只會動一次');
  //   const currentScore = getCurrentScore() + getScoreByBoardName('boardA')
  //   setScore(currentScore)
  // }, [])
  const score = useGetTotalScore('boardA')
  return <p>board a {score}</p>
}

const ScoreBoardB: React.FC = () => {
  // const [score, setScore] = useState(0)
  // useEffect(() => {
  //   console.log('ScoreBoardB 代入空陣列，只會動一次');
  //   const currentScore = getCurrentScore() + getScoreByBoardName('boardB')
  //   setScore(currentScore)
  // }, [])
  const score = useGetTotalScore('boardB')
  return <p>board b {score}</p>
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