import { useState } from 'react'
import styled from 'styled-components';

// 將之前寫的計數器加上 css 樣式

// 定義 props 物件的型別
type BtnProps = {
  total: number
  onBtnClickHandler: () => void
}

type BtnAddPropType = {
  $size?: number
}

// 將 BtnAdd 新增一個自訂(非HTML)的 $size 屬性，可以改變 padding 大小。
// https://styled-components.com/docs/basics#passed-props
// 使用 attrs 可以將額外的屬性附加到組件中
const BtnAdd = styled.button.attrs<BtnAddPropType>((props) => {
  return {
    // 這邊可以定義 static 的 HTML 屬性
    name: 'Add',
    // 這邊可以自定動態屬性
    $size: props.$size || 1
  }
})<BtnAddPropType>`
  /* 這邊可以直接拿到動態的屬性來用 */
  padding: ${props => (props.$size as number / 2)}rem ${props => props.$size}rem;
  border: 2px solid lightblue;
  border-radius: .5rem;
  background-color: #eff;
  color: orange;

  &:hover {
    cursor: pointer;
    background-color: #cef;
  }
`

// 在 ts 中 props 必需傳入一個泛型告訴裡面的物件是什麼型別。
// 讓組件有狀態(state)，改變狀態 -> 自動觸發畫面更新
const Btn: React.FC<BtnProps> = (props) => {
  console.log('render Btn');
  return (
    // 注意：原生 js 使用 onclick，react 使用 onClick。 
    <BtnAdd onClick={props.onBtnClickHandler} $size={3}>
      +1, 
      <span> total:{props.total}</span>
    </BtnAdd>
  )
}

const Title = styled.h1`
  color: red;
  font-size: 50px;

  &:hover {
    color: #ccc;
  }
`

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
      <Title>計數器：{total}</Title>
      <Btn total={total} onBtnClickHandler={add} />
    </>
  )
}

export default App
