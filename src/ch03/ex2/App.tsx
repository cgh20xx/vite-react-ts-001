// 拆分 Header Body components
import reactLogo from '@/assets/react.svg'
import Header from '@/ch03/ex2/components/Header'
import '@/ch03/ex2/App.css'

const Body: React.FC = () => {
  return (
    <>
      {/* class 樣式需使用 className */}
      <h1 className="h1">Hank</h1>
      <p>這是一句話</p>
      {/* srcset 需改用 srcSet */}
      <img src={reactLogo} alt="" srcSet="" />
    </>
  )
}
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
