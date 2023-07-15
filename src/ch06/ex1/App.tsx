import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'

// 新增一個 Product 產品頁
function Product() {
  const params = useParams()
  console.log('params:', params);
  return <>
    <h1>Page ProductId: { params.productId }</h1>
  </>
}

// 新增一個 Shop 頁，裡面是 Product
function Shop() {
  return <>
    <h1>Page Shop</h1>
    <Outlet />
  </>
}

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
      <Route path="/shop" element={<Shop />}>
        <Route path=":productId" element={<Product />} />
      </Route>
    </Routes>
  </>
}

export default App