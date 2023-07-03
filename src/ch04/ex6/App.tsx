import { useEffect, useState } from 'react'

// 為 API 回傳的 data 內容定義一個 interface or type
interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const App: React.FC = () => {

  const [postId, setPostId] = useState(1)
  console.log('postId:', postId);

  // 使用 async await 改寫 fetch
  // 注意： useEffect 第一個參數不支持 async function，故必需定義另一個 async function 並呼叫它。
  async function fetchData(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = await res.json() as Comments[]
    console.log('data2:', data);
  }

  // 使用 fetch 打一個假的 api
  useEffect(() => {
    fetchData(postId)
  }, [postId])

  function clickHandler(id: number) {
    setPostId(id)
  }

  return <>
    <h1>Fetch</h1>
    <button onClick={() => clickHandler(1)}>ID 1 data</button>
    <button onClick={() => clickHandler(2)}>ID 2 data</button>
  </>
}

export default App