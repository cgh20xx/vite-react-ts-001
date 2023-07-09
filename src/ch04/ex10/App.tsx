const App: React.FC = () => {
  return <>
    <h1>登入</h1>
    <p>帳號：<input type="text" name="account" /></p>
    <p>密碼：<input type="password" name="password" /></p>
    <input type="button" value="送出" />
  </>
}

export default App