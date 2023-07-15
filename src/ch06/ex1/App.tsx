import { Routes, Route, Link, Outlet } from 'react-router-dom'

// 新增一個 AboutMe 頁面位於 About 內，路由為 /about/me/
function AboutMe() {
  return <>
    <h1>Page About Me</h1>
  </>
}

function About() {
  return <>
    <h1>Page About</h1>
    {/* 子路由的組件會顯示在 <Outlet /> */}
    <Outlet />
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
      <Route path="/about" element={<About />}>
        <Route path="me" element={<AboutMe />} />
      </Route>
    </Routes>
  </>
}

export default App