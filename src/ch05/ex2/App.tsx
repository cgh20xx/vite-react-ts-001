// 情境：有 App、B、C 三個組件，巢狀包裏，最底層的組件需拿到最上層組件的 state
// 問題：state 需傳遞很多層才能到達子組件
// 解決：使用 context provider 隔空投送，讓孫組件可以拿到祖父的 context 值(先寫死在同一個檔案中)
// 重構：拆分 btnProvider btnContext 出去，避免所有共用屬性都塞在 App 組件。因為只有一個 context 的屬性被更新，所有 useContext 的組件都會被更新，效能較差。

// import { createContext, useContext, useState } from 'react'
import { BtnProvider, useBtnContext } from './context/BtnContext'

const C: React.FC = () => {
  // const { btnVisible } = useContext(BtnContext)
  const {btnVisible} = useBtnContext()
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
  return <BtnProvider>
    <h1>App 組件</h1>
    <B />
  </BtnProvider>
}

export default App