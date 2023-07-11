import { useEffect, useState } from 'react'

const App: React.FC = () => {
  console.log('App render');
  const [value, setValue] = useState(false)

  // 當 deps array 觀注 value 參數，每次 value 改變就會執行 useEffect callback
  useEffect(() => {
    console.log('useEffect callback');
  }, [value])

  return <>
    <h1>App</h1>
    <p>value: {value.toString()}</p>
    <button onClick={() => {setValue(!value)}}>改變 value</button>
  </>
}

export default App