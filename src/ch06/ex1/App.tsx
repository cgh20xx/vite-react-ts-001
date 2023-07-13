import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return <>
    <h1>React Router App</h1>
    {/* <Route> 能有多個，只能包在 <Routes> 底下使用 */}
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </>
}

export default App