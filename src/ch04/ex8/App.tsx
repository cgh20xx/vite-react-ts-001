import { useState, useRef } from 'react'

// 情境：寫一個計數(不需更新畫面)，點5次顯示隱藏的區塊，點15次關閉區塊。
// 問題：呼叫顯示隱藏的 setHidden 會觸發 rerender 導致變數被重罝。
const App: React.FC = () => {

  const [hidden, setHidden] = useState(false)

  let sum = 0
  console.log('init sum:', sum);
  console.log('init hidden:', hidden);

  function clickHandler() {
    sum = sum + 1
    console.log('click sum:', sum);
    if (sum === 5) {
      setHidden(true)
    } else if (sum > 15) {
      // 這邊會有問題，因 sum 會被重置了 1 次才會跑到 6 以上。
      setHidden(false)
    }
  }
  return <>
    <h1>Ref</h1>
    <button onClick={clickHandler}>+1</button>
    {
      hidden && <div>我是被隱藏的區塊</div>
    }
  </>
}

export default App