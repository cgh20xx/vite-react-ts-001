import { PropsWithChildren, createContext, useContext, useState } from 'react'

const defaultValue = {
  btnVisible: false
}

// 建立一個 btnContext
const BtnContext = createContext(defaultValue)

// 設定值的時候調用它å
// 建立一個 BtnProvider 包裝 BtnContext.provider
// 注意：這邊要自訂一個 Props 類型，內含可選的 children 屬性，react 會自動將 slot 的內容放到 children 中。 
type Props = {
  children?: React.ReactNode
}
export const BtnProvider: React.FC<Props> = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(true)
  return <BtnContext.Provider
    value={{
      btnVisible
    }}
  >
    {children}
  </BtnContext.Provider>
}

// 取值的時候調用它
export const useBtnContext = () => {
  return useContext(BtnContext)
}