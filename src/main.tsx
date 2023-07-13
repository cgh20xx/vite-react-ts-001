// import React from 'react'
import ReactDOM from 'react-dom/client'
// ch06 安裝 react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import App from '@/ch03/ex1/App'
// import App from '@/ch03/ex1/App2'
// import App from '@/ch03/ex4/App'
// import App from '@/ch03/ex5/App'
// import App from '@/ch03/ex6/App'
// import App from '@/ch04/ex1/App'
// import App from '@/ch04/ex2/App'
// import App from '@/ch04/ex3/App'
// import App from '@/ch04/ex4/App'
// import App from '@/ch04/ex5/App'
// import App from '@/ch04/ex6/App'
// import App from '@/ch04/ex7/App'
// import App from '@/ch04/ex8/App'
// import App from '@/ch04/ex9/App'
// import App from '@/ch04/ex10/App'
// import App from '@/ch05/ex1/App'
// import App from '@/ch05/ex2/App'
// import App from '@/ch05/ex3/App'
// import App from '@/ch05/ex4/App'

// ch06 是 react router
import App from '@/ch06/ex1/App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // 為 App 包上 <BrowserRouter>
  // <Route> 能有多個，只能包在 <Routes> 底下使用
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>,
)
