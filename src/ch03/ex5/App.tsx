import React from 'react'

// Btn 元件
type BtnProps = {
  clickHandler: () => void
}
type BtnState = object

class Btn extends React.Component<BtnProps, BtnState> {
  constructor(props: BtnProps) {
    super(props)
  }

  // overrid React.Component 的 render 方法
  render(): React.ReactNode {
    return <button onClick={this.props.clickHandler}>+1</button>
  }
}

// App 元件
type AppProps = object
type AppState = {
  title: string
  count: number
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    console.log('constructor');
    // 新增一個名為 count 的 state
    this.state = {
      title: '計數器',
      count: 0
    }

    // 下面這行是保証 method 裡的 this 永遠指向 App
    // 但缺點是 app1.countClickHandler 和 app2.countClickHandler 就指向不同的記憶體位址。
    this.countClickHandler = this.countClickHandler.bind(this)
  }
  // 以下有三個最常用的生命週期方法

  // 1. Component 被安裝到畫面之後
  componentDidMount(): void {
    console.log('componentDidMount');
  }

  // 2. Component 更新完之後
  componentDidUpdate(prevProps: object, prevState: object, snapshot?: any): void {
    console.log('componentDidUpdate', this.state);
  }

  // 3. Component 將被刪除之前
  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }


  // 自定義一個 countClickHandler() method
  countClickHandler() {
    console.log('countClickHandler', this);
    // 注意：countClickHandler 由於是在 Btn onClick 才被呼叫，
    // 這裡拿到的 this 在未經處理(bind)的情況，不是 App 的 instance。
    // 需要將 countClickHandler 強制綁定 App 的 this 才符合理想中的 this。

    // 要更新 State 需使用 setState，並回傳一個新的 State。

    // 方法1：
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 方法2：
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  // overrid React.Component 的 render 方法
  render(): React.ReactNode {
    return (
      <>
        <h1>{this.state.title} Count: {this.state.count}</h1>
        <Btn clickHandler={this.countClickHandler} />
      </>
    )
  }
}

const app1 = new App({})
console.log('app1:', app1);
const app2 = new App({})
console.log('app2:', app2);

export default App
