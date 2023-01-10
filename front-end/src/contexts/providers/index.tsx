import { ReactNode } from "react"
import ApiDogProviders from "./ApiDogProviders"
import CrudProvider from "./CrudProvider"
import UserProvider from "./UserProvider"

interface IProviders {
  children: ReactNode
}

const Providers = ({ children }: IProviders) => {
  return (
    <ApiDogProviders>
      <UserProvider>
        <CrudProvider>
          {children}
        </CrudProvider>
      </UserProvider>
    </ApiDogProviders>
  )
}

export default Providers