import React from 'react';

// 說明：有 ScoreBoardA、ScoreBoardB 兩個 Component，功能為呈現自己當前的 totalScore。
// totalScore 計算方式：getCurrentScore + getScoreByBoardName
// 問題：可以發現這兩個 Component 除了 totalScore 計算方式有些許不同，其餘完全一樣，之後可以把共用的部份拆出來。

// ======================= type ========================

type AppProps = object

type AProps = object
type AState = {
  totalScore: number;
}

type BProps = object
type BState = {
  totalScore: number;
}

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

// ======================= two class component ========================

class ScoreBoardA extends React.Component<AProps, AState> {
  constructor(props: AProps) {
    super(props)
    this.state = {
      totalScore: 0
    }
  }

  // 組件被安裝時
  componentDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('boardA')
    })
  }

  render(): React.ReactNode {
      return <>
        <p>A Total Score: {this.state.totalScore}</p>
      </>
  }
}

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props: BProps) {
    super(props)
    this.state = {
      totalScore: 0
    }
  }

  // 組件被安裝時
  componentDidMount() {
    this.setState({
      totalScore: getCurrentScore() + getScoreByBoardName('boardB')
    })
  }

  render(): React.ReactNode {
      return <>
        <p>A Total Score: {this.state.totalScore}</p>
      </>
  }
}

// ======================== main =======================

class App extends React.Component {
  constructor(props: AppProps) {
    super(props)
  }
  render(): React.ReactNode {
      return (
        <>
          <ScoreBoardA />
          <ScoreBoardB />
        </>
      )
  }
}

export default App