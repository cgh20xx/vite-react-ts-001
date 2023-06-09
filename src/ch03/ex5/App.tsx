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
type AppState = object

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
  }

  // 定義一個 countClickHandler() method
  countClickHandler() {
    console.log('countClickHandler');
  }

  // overrid React.Component 的 render 方法
  render(): React.ReactNode {
    return (
      <>
        <h1>Count: 0</h1>
        <Btn clickHandler={this.countClickHandler} />
      </>
    )
  }
}

export default App
