import { useState, useEffect } from 'react'

let interval: NodeJS.Timeout
let num = 0

const App: React.FC = () => {
  console.log('App');
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('useEffect: [counter]');
    // 如果 useEffect 的 dependencies 有 state 時，偵聽事件可能會被多次綁定。
    // 如下：setInterval 會在 counter 每次被更新時重覆綁定。
    interval = setInterval(() => {
      num++
      console.log(num)
    }, 1000)
  }, [counter])

  function clickHandler() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>count: {counter}</h1>
      <button onClick={clickHandler}>+1</button>
    </>
  )
}

export default App