// 定義 props 物件的型別
type BtnProps = {
  total: number
}

// 在 ts 中 props 必需傳入一個泛型告訴裡面的物件是什麼型別。
const Btn: React.FC<BtnProps> = ({total}) => {
  return (
    <button>
      +1, 
      <span> total:{total}</span>
    </button>
  )
}

// 顯示一個計數器，顯示 total 總數。
const App: React.FC = () => {
  const total = 0
  return (
    <>
      <h1>計數器：{total}</h1>
      <Btn total={total} />
    </>
  )
}

export default App
