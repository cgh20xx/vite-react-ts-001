import { useState } from 'react'

// =========== 1. useState 基本用法 ============

// const App: React.FC = () => {
//   console.log('App');
  
//   // 有涉及畫面更新的變數，需使用 useState 處理 react 才會自動更新畫面。
//   const [counter, setCounter] = useState(0)
//   // 對於初始值未確定，但之後會是 number 類型也可以手動加入泛型，如下：
//   // const [counter, setCounter] = useState<number>()

//   function counterHandler() {
//     console.log('counterHandler:before', counter);
//     setCounter(counter + 1)
//     console.log('counterHandler:after', counter); // 注意：這邊拿到的還會是舊的 counter
//   }

//   return (
//     <>
//       <h1>Counter: {counter}</h1>
//       <button onClick={counterHandler}>+1</button>
//     </>
//   )
// }

// export default App



// =========== 2. batching update (批量更新) ============

// React 也有事件冒泡機制，父元件也會偵聽到子元件的 onClick 事件，
// 父組件渲染，子組件也會重新渲染。
// 照理說 Child 會被 render 兩次，但實測只有丑次，因 react 內部機制會合併掉。

const Parent: React.FC = () => {
  console.log('Parent');
  const [count, setCount] = useState(0)
  return (
    <div onClick={() => setCount(prev => prev + 1)}>
      Parent clicked {count} times <br />
      <Child />
    </div>
  )
}

const Child: React.FC = () => {
  console.log('Child');
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Child clicked {count} times
    </button>
  )
}

// 渲染流程(re-render)：
// 1. child 點下去 button 之後
//    - setCount (child)
//    - re-render (child) -> 被 react 合併掉
// 2. Parent 因為冒泡觸發事件後
//    - setCount (parent)
//    - re-render (parent)
//    - re-render (child)


export default Parent
