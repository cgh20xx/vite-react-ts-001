// 情境：有 App、B、C 三個組件，巢狀包裏，最底層的組件需拿到最上層組件的 state
// 問題：state 需傳遞很多層才能到達子組件
// 解決：使用 context provider 隔空投送，讓孫組件可以拿到祖父的 context 值(先寫死在同一個檔案中)

import { createContext, useContext, useState } from 'react'

const defaultValue = {
  btnVisible: false
}

// 建立一個 btnContext
const BtnContext = createContext(defaultValue)


const C: React.FC = () => {
  const { btnVisible } = useContext(BtnContext)
  console.log('btnVisible:', btnVisible);
  return <>
    <p>C 組件</p>
    <p>btnVisible: {btnVisible.toString()}</p>
  </>
}

const B: React.FC = () => {
  return <>
    <p>B 組件</p>
    <C />
  </>
}

const App: React.FC = () => {
  const [btnVisible, setBtnVisible] = useState(true)
  return <BtnContext.Provider value={{btnVisible}}>
    <h1>App 組件</h1>
    <B />
  </BtnContext.Provider>
}

export default App