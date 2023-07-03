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
    // fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    // .then(res => res.json())
    // .then((data: Comments[]) => {
    //   console.log('data:', data);
    // })

    // 使用 async await 改寫 fetch
    // 注意： useEffect 第一個參數不支持 async function，故必需定義另一個 async function 並呼叫它。
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      const data = await res.json() as Comments[]
      console.log('data2:', data);
    }

    fetchData()
  }, [])

  return <>
    <h1>Fetch</h1>
  </>
}

export default App