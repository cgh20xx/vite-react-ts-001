// 情境：有 App、B、C 三個組件，巢狀包裏，最底層的組件需拿到最上層組件的 state
// 問題：state 需傳遞很多層才能到達子組件

import { useState } from "react"

type Props = {
  btnVisible: boolean
}

const C: React.FC<Props> = ({btnVisible}) => {
  console.log('btnVisible:', btnVisible);
  return <>
    <p>C 組件</p>
  </>
}

const B: React.FC<Props> = ({btnVisible}) => {
  return <>
    <p>B 組件</p>
    <C btnVisible={btnVisible}/>
  </>
}

const App: React.FC = () => {
  const [btnVisible, setBtnVisible] = useState(false)
  return <>
    <h1>App 組件</h1>
    <B btnVisible={btnVisible} />
  </>
}

export default App