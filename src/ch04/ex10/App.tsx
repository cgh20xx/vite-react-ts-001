import { useState } from 'react';

const App: React.FC = () => {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  function accountHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // e.target：指的是觸發事件的物件。
    // e.currentTarget：指的是被監聽的物件。(通常與 this 相同)
    setAccount(event.currentTarget.value)
  }

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
  }

  function sendFromHandler() {
    console.log('account:', account);
    console.log('password:', password);
  }

  return <>
    <h1>登入</h1>
    <p>帳號：<input type="text" value={account} name="account" onChange={accountHandler} /></p>
    <p>{account}</p>
    <p>密碼：<input type="password" value={password} name="password" onChange={passwordHandler} /></p>
    <p>{password}</p>
    <input type="button" value="送出" onClick={sendFromHandler} />
  </>
}

export default App