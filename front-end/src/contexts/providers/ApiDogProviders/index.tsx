import { createContext, ReactNode, useEffect, useState } from "react"
import { apiDog } from "../../../services/api"

interface IApiDogProviderProps {
  children: ReactNode;
}

interface IApiDogContext {
  refreshImg: () => void;
  randomImage: string
}

export const ApiDogContext = createContext<IApiDogContext>({} as IApiDogContext)

const ApiDogProvider = ({ children }: IApiDogProviderProps) => {

  const [randomImage, setRandomImage] = useState<string>('')

  useEffect(() => {
    if (randomImage === '') {
      refreshImg()
    }
  })

  const refreshImg = async () => {
    try {
      const request = await apiDog.get('/woof?include=png,jpg')
      setRandomImage(`https://random.dog/${request.data}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ApiDogContext.Provider value={{ refreshImg, randomImage }}>
      {children}
    </ApiDogContext.Provider>
  )
}

export default ApiDogProvider