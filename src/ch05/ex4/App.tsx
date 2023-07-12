import { useState } from 'react'
// 問題：這範例是要突顯出 App 裡的 state 被更新，連 B 組件也被更新了，但 B 組件並沒有使用到 Props，

const B: React.FC = () => {
  console.log('B render');
  return <>
    <h1>B</h1>
  </>
}

const App: React.FC = () => {
  console.log('App render');
  const [value, setValue] = useState(false)
  return <>
    <h1>App</h1>
    <B />
    <button onClick={() => {setValue(!value)}}>重新 render</button>
  </>
}

export default App