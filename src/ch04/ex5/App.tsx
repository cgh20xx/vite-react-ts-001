// 此範例功能：每次按下 +1 就重製計時器 num = 0
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
    // 所以需要 return cleanup function 並在裡面清除事件
    interval = setInterval(() => {
      num++
      console.log(num)
    }, 1000)
    // cleanup function：在 component 被從 DOM 移除時，會執行 cleanup function。
    return () => {
      console.log('before re-render');
      if (interval) {
        clearInterval(interval)
        num = 0
      }
    }
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