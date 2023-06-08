import { useState } from "react"

// 定義 props 物件的型別
type BtnProps = {
  total: number
}

// 在 ts 中 props 必需傳入一個泛型告訴裡面的物件是什麼型別。
// 讓組件有狀態(state)，改變狀態 -> 自動觸發畫面更新
const Btn: React.FC<BtnProps> = (props) => {
  const [total, setTotal] = useState(props.total)
  function add() {
    // 使用 setTotal 更新值則會更新畫面
    setTotal(total + 1)
  }
  console.log(total);
  // 注意：畫面會更新 2 次是因為 React.StrictMode 在 dev 環境的關係，不要緊。
  return (
    // 注意：原生 js 使用 onclick，react 使用 onClick。 
    <button onClick={add}>
      +1, 
      <span> total:{total}</span>
    </button>
  )
}

// 顯示一個計數器，顯示 total 總數。
const App: React.FC = () => {
  const total = 0
  return (
    <>
      <h1>計數器：{total}</h1>
      <Btn total={total} />
    </>
  )
}

export default App
