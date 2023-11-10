import React from 'react';

// 說明：有 ScoreBoardA、ScoreBoardB 兩個 Component，功能為呈現自己當前的 totalScore。
// totalScore 計算方式：getCurrentScore + getScoreByBoardName

// 問題：可以發現這兩個 Component 除了 totalScore 計算方式有些許不同，其餘完全一樣，之後可以把共用的部份拆出來。

// 解決方式：使用 Higher Order Component (HOC) 幫助我們重複使用程式碼的 React Component。
// https://pjchender.dev/react/react-higher-order-component/

// 簡單來說就是
// 1. 建立一個 function 把不同的部份當參數傳進去，回傳一個新的 component。
// 2. 將 ScoreBoardA、ScoreBoardB 原本的 state.totalScore 移除
// 3. 改由 HOC 上傳入 props.totalScore 給 ChildComponent

// ======================= type ========================

type AppProps = object

type AProps = {
  totalScore: number;
}
type AState = {
  // totalScore: number;
}

type BProps = {
  totalScore: number;
}
type BState = {
  // totalScore: number;
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
  }

  render(): React.ReactNode {
      return <>
        <p>A Total Score: {this.props.totalScore}</p>
      </>
  }
}

class ScoreBoardB extends React.Component<BProps, BState> {
  constructor(props: BProps) {
    super(props)
  }

  render(): React.ReactNode {
      return <>
        <p>A Total Score: {this.props.totalScore}</p>
      </>
  }
}

type BoardTotal = {
  totalScore: number
}
// 實作 HOC：建立一個 function 把不同的部份當參數傳進去，回傳一個新的 component。
function withTotalScore(ChildComponent: React.ComponentType<BoardTotal>, boardName: string) {
  return class extends React.Component<object, BoardTotal> {
    constructor(props: object) {
      super(props)
      this.state = {
        totalScore: 0
      }
    }
  
    // 組件被安裝時
    componentDidMount() {
      this.setState({
        totalScore: getCurrentScore() + getScoreByBoardName(boardName)
      })
    }
  
    render(): React.ReactNode {
        return <ChildComponent totalScore={this.state.totalScore} />
    }
  }
}

// 傳入不同參數產生出不同的 Component
const BoardAWidthTotalScore = withTotalScore(ScoreBoardA, 'boardA');
const BoardBWidthTotalScore = withTotalScore(ScoreBoardB, 'boardB');

// ======================== main =======================

class App extends React.Component {
  constructor(props: AppProps) {
    super(props)
  }
  render(): React.ReactNode {
      return (
        <>
          <BoardAWidthTotalScore />
          <BoardBWidthTotalScore />
        </>
      )
  }
}

export default App