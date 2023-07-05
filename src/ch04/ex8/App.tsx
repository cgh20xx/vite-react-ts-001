import { useState, useRef } from 'react'

// 情境：寫一個計數(不需更新畫面)，點5次顯示隱藏的區塊，點15次關閉區塊。
// 問題：呼叫顯示隱藏的 setHidden 會觸發 rerender 導致變數被重罝。
// 改善：使用 useRef() 來改寫 sum 可解決以上問題。
// useRef 與 useState 的不同在於 useRef 更新值時不會 rerender
const App: React.FC = () => {

  const [hidden, setHidden] = useState(false)
  // 使用 useRef 取代 sum 讓 react 在 rerender 能記住之前的值
  const sumRef = useRef(0)
  // 注意： useRef() 回傳的是物件，需使用 .current 取得值
  // let sum = 0
  console.log('init sumRef.current:', sumRef.current);
  console.log('init hidden:', hidden);

  function clickHandler() {
    sumRef.current = sumRef.current + 1
    console.log('click sumRef.current:', sumRef.current);
    if (sumRef.current === 5) {
      setHidden(true)
    } else if (sumRef.current > 15) {
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