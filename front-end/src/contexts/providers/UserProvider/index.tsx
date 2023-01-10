import { createContext, ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { apiCrud } from "../../../services/api"

interface IUser {
  login: (data: IUserLogin) => void
}

interface IUserLogin {
  username: string
  password: string
}

interface IUserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<IUser>({} as IUser)

const UserProvider = ({ children }: IUserProviderProps) => {

  const navigate = useNavigate()

  const login = async (data: IUserLogin) => {

    function validateLogin() {
      localStorage.setItem('@desafioSharEnergyTOKEN', JSON.stringify(req.data))
      navigate('../main', { replace: true })
    }

    function doNotValidateLogin() {
      console.log('Dados incorretos')
    }

    const req = await apiCrud.post('/login', data)
    console.log(req);

    req ? validateLogin() : doNotValidateLogin()

  }

  return (
    <UserContext.Provider value={{ login }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider