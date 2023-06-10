import { useState } from 'react'
import styled from 'styled-components';

// 定義 props 物件的型別
type BtnProps = {
  total: number
  onBtnClickHandler: () => void
}

// 在 ts 中 props 必需傳入一個泛型告訴裡面的物件是什麼型別。
// 讓組件有狀態(state)，改變狀態 -> 自動觸發畫面更新
const Btn: React.FC<BtnProps> = (props) => {
  console.log('render Btn');
  return (
    // 注意：原生 js 使用 onclick，react 使用 onClick。 
    <button onClick={props.onBtnClickHandler}>
      +1, 
      <span> total:{props.total}</span>
    </button>
  )
}

// 顯示一個計數器，顯示 total 總數。
const App: React.FC = () => {
  console.log('render App');
  const [total, setTotal] = useState(0)
  function add() {
    // 使用 setTotal 更新值則會更新畫面
    setTotal(total + 1)
    // 可以觀察到，當更新 state 時，當前的組件及有用到的子組件都會被重新 render，
    // 即便當前的組件 template 畫面沒有用到該 state。
  }
  return (
    <>
      <h1>計數器：{total}</h1>
      <Btn total={total} onBtnClickHandler={add} />
    </>
  )
}

export default App
