import { useEffect } from 'react'


const App: React.FC = () => {
  
  // 使用 fetch 打一個假的 api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res => res.json())
    .then(data => {
      console.log('data:', data);
    })
  }, [])

  return <>
    <h1>Fetch</h1>
  </>
}

export default App