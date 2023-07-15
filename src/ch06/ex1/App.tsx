import { Routes, Route, Link, Outlet, useParams, useNavigate, RouteObject, useRoutes } from 'react-router-dom'

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

function PageNotFound() {
  return <h1>404 找不到頁面</h1>
}

// 改使用 config 的方式設定路由較為彈性
const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />,
    children: [
      {
        path: 'me',
        element: <AboutMe />
      },
    ]
  },
  {
    path: 'shop',
    element: <Shop />,
    children: [
      {
        path: ':productId',
        element: <Product />
      },
    ]
  },
  // 新增找不到頁面的路由，需放在最後面。
  {
    path: '*',
    element: <PageNotFound />
  },
]

const App: React.FC = () => {
  // 使用設定檔的方式改寫 Routes
  const elements = useRoutes(routesConfig)

  // 使用 useNavigate 可以用程式跳轉網址，不需使用 <Link> 組件
  const navigate = useNavigate()

  return <>
    <h1>Header</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <button onClick={() => navigate('/shop/abc')}>/shop/abc</button>
      </li>
    </ul>
    {/* <Route> 能有多個，只能包在 <Routes> 底下使用 */}
    {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}>
        <Route path="me" element={<AboutMe />} />
      </Route>
      <Route path="/shop" element={<Shop />}>
        <Route path=":productId" element={<Product />} />
      </Route>
    </Routes> */}
    {elements}
  </>
}

export default App