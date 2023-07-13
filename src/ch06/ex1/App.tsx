import { Routes, Route, Link } from 'react-router-dom'


function About() {
  return <>
    <h1>Page About</h1>
  </>
}

function Home() {
  return <>
    <h1>Page Home</h1>
  </>
}


const App: React.FC = () => {
  return <>
    <h1>Header</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    {/* <Route> 能有多個，只能包在 <Routes> 底下使用 */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </>
}

export default App