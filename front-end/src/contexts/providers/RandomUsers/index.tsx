import { createContext, ReactNode } from "react";
import { apiUsers } from "../../../services/api";

interface IUsersRandomContext {
  listUsers: () => void
}

interface IUsersRandomProps {
  children: ReactNode
}

export const UsersRandomContext = createContext<IUsersRandomContext>({} as IUsersRandomContext)

const UsersRandomProvider = ({ children }: IUsersRandomProps) => {

  const listUsers = async () => {
    const data = await apiUsers.get('/users')
    console.log(data)
  }

  return (
    <UsersRandomContext.Provider value={{ listUsers }}>
      {children}
    </UsersRandomContext.Provider>
  )

}

export default UsersRandomProvider;