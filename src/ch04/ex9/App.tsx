import { useEffect, useRef } from 'react'

// 情境：取得 HTML DOM 元素的方式
// 第一種使用傳統的 document.getElementById('id');

const App: React.FC = () => {

  // 使用 useEffect 才可正確拿到組件的 Dom
  useEffect(() => {
    const textDom = document.getElementById('text') as HTMLInputElement;
    console.log(textDom); // 可拿到 input 的 dom 了
    textDom.focus()
  }, [])

  return <>
    <h1>Ref DOM</h1>
    <input id="text" type="text" />
  </>
}

export default App