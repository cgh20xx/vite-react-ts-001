import { useEffect, useState, useMemo, useCallback } from 'react'

const App: React.FC = () => {
  console.log('App render');
  const [value, setValue] = useState(false)

  // 假設自訂一個 obj 放到 deps array 中，eslint 會提示 useEffect 會在每次 render 時被執行
  // 因為次 render 時 obj 都是一個新的物件，所以每次都會被更新。
  // 建議 obj 使用 useMemo() 重新包裝。
  // 使用 useMemo 重新包裝 obj 後，就會記住 obj，而不會每次 rerender 都是不同 obj，造成一直觸發 useEffect callback

  // useMemo will only recompute the memoized value when one of the deps has changed.
  // useMemo 文件：https://react.dev/reference/react/useMemo
  // const memoObj = useMemo(() => {
  //   const obj = { name: 'Hank' }
  //   return obj
  // }, [])

  // console.log('memoObj:', memoObj); // { name: 'Hank' }

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // useCallback 文件：https://react.dev/reference/react/useCallback
  // const memoFunc = useCallback(() => {
  //   console.log('memmoFunc');
  // }, [])

  // console.log('memoFunc:', memoFunc);


  // useCallback 可以用於記憶 function 避免每次 render 重新產生新的 handler function
  // 以 onClick 的 handler 為例：
  const onClickHandler = useCallback(() => {
    setValue(val => !val)
  }, [])

  useEffect(() => {
    console.log('useEffect callback');
  }, [value])

  return <>
    <h1>App</h1>
    <p>value: {value.toString()}</p>
    <button onClick={onClickHandler}>改變 value</button>
  </>
}

export default App