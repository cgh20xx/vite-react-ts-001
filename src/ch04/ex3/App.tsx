import { useState } from 'react'

// 1. useState 基本用法

const App: React.FC = () => {
  console.log('App');
  
  // 有涉及畫面更新的變數，需使用 useState 處理 react 才會自動更新畫面。
  const [counter, setCounter] = useState(0)
  // 對於初始值未確定，但之後會是 number 類型也可以手動加入泛型，如下：
  // const [counter, setCounter] = useState<number>()

  function counterHandler() {
    console.log('counterHandler:before', counter);
    setCounter(counter + 1)
    console.log('counterHandler:after', counter); // 注意：這邊拿到的還會是舊的 counter
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={counterHandler}>+1</button>
    </>
  )
}

export default App