// ============== useEffect ==============
import { useEffect, useState } from 'react'

const App: React.FC = () => {
  console.log('App');

  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('偶數')

  function handleClick() {
    setCounter(counter + 1)
  }

  // useEffect 無論如何一開始一定會執行一次 
  // 第一個參數為 sutup function
  // 第二個參數為 dependencies

  // 1. 若 dependencies 傳入 [] 表此組件在 render 時只執行一次
  // 類似 mount 適合用放打一次性的 API
  useEffect(() => {
    console.log('useEffect: []');
  }, [])

  // 2. 若 dependencies 傳入 [counter] 表只偵聽 counter 的變化
  // 類似 watch 的功能
  useEffect(() => {
    console.log('useEffect: [counter]')
    counter % 2 === 0 ? setText('偶數') : setText('奇數')
  }, [counter])

  // 3. 若沒有傳入 dependencies，只要任何狀態更新就會觸發，通常不會這樣用，還不確定應用場景在哪？
  // useEffect(() => {
  //   console.log('useEffect: undefined');
  // })
  return (
    <>
      <h1>count: {counter}</h1>
      <button onClick={handleClick}>+1</button>
      <p>{text}</p>
    </>
  )
}

export default App