import { memo, useState } from 'react'
// 問題：這範例是要突顯出 App 裡的 state 被更新，連 B 組件也被更新了，但 B 組件並沒有使用到 Props，

// 解決：使用 React.memo 可以記憶 Function Component 的 props 有無變化，若無變化就不會更新。
// 如果組件在給定相同的 props 的情況下呈現相同的結果，可以將其包裝在對 React.memo 的調用中，
// 以便在某些情況下通過記住結果來提高性能。這意味著 React 將跳過渲染組件，並重用上次渲染的結果。
// memo 文件：https://react.dev/reference/react/memo

// 新增測試 B 組件的 props 傳入 num，看看 memo 過的 B 組件會不會被更新：會
// 新增測試 B 組件的 props 傳入 obj，看看 memo 過的 B 組件會不會被更新：會
type PropB = {
  num: number
  obj: { name: string }
}

const B: React.FC<PropB> = memo(({ num, obj }) => {
  console.log('B render', num);
  return <>
    <h1>B num:{num}</h1>
    <p>name: {obj.name}</p>
  </>
})

const App: React.FC = () => {
  console.log('App render');
  const [value, setValue] = useState(false)
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({ name: '' })
  return <>
    <h1>App</h1>
    <B num={num} obj={obj}/>
    <button onClick={() => {setValue(!value)}}>重新 render</button>
    {/* 當 num 被改變時，B 組件也會被更新。 */}
    <button onClick={() => {setNum(num + 1)}}>num  +1</button>
    {/* 當 obj 被改變時，B 組件也會被更新，因為每次都是新的 obj，期望只有 obj.name 真的有更新才重新 render */}
    {/* 注意：當第二次按下 name = hank 時還是會被更新，下個範例會優化。 */}
    <button onClick={() => {setObj({name: 'hank'})}}>name = hank</button>
  </>
}

export default App