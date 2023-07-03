import { useEffect } from 'react'

// 為 API 回傳的 data 內容定義一個 interface or type
interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const App: React.FC = () => {
  
  // 使用 fetch 打一個假的 api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res => res.json())
    .then((data: Comments[]) => {
      console.log('data:', data);
    })
  }, [])

  return <>
    <h1>Fetch</h1>
  </>
}

export default App