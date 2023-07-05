import { useRef } from 'react'

// 情境：取得 HTML DOM 元素的方式
// 第一種使用傳統的 document.getElementById('id');

const App: React.FC = () => {

  const textDom = document.getElementById('text');
  console.log(textDom); // null

  return <>
    <h1>Ref DOM</h1>
    <input id="text" type="text" />
  </>
}

export default App