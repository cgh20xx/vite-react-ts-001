import { useEffect, useState } from 'react'

const App: React.FC = () => {
  console.log('App render');
  const [value, setValue] = useState(false)

  // 假設自訂一個 obj 放到 deps array 中，eslint 會提示 useEffect 會在每次 render 時被執行
  // 因為次 render 時 obj 都是一個新的物件，所以每次都會被更新。
  // 建議 obj 使用 useMemo() 重新包裝。
  const obj = {}

  // 當 deps array 觀注 value 參數，每次 value 改變就會執行 useEffect callback
  useEffect(() => {
    console.log('useEffect callback');
  }, [obj])

  return <>
    <h1>App</h1>
    <p>value: {value.toString()}</p>
    <button onClick={() => {setValue(!value)}}>改變 value</button>
  </>
}

export default App