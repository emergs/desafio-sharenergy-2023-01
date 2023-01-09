import { createContext, useState } from "react"
import { IChildren } from "../../../interfaces"
import { apiCrud } from "../../../services/api"

interface ICrudProvider {
  getAllCustomers: () => void
  createNewCustomer: (data: ICreateNewCustomer) => void
  deleteCustomer: (cpf: string) => void
  updateCustomer: (id: string) => void
  listCustomerForId: (id: string) => void
  handleOpen: () => void
  handleClose: () => void
  modalEdition: boolean
  customers: any
  oneCustomer: any
}

interface ICreateNewCustomer {
  name: string
  email: string
  phone: string
  address: string
  cpf: string
}

export const CrudContext = createContext<ICrudProvider>({} as ICrudProvider)

const CrudProvider = ({ children }: IChildren) => {
  const [customers, setCustomers] = useState([])
  const [oneCustomer, setOneCustomer] = useState('')
  const [modalEdition, setModalEdition] = useState(false);

  const token = JSON.parse(localStorage.getItem('@desafioSharEnergyTOKEN') || '{}')

  const handleOpen = () => setModalEdition(true);
  const handleClose = () => setModalEdition(false);

  const getAllCustomers = async () => {
    const req = await apiCrud.get('/customer')
    setCustomers(req.data)
    console.log(req.data)
  }

  const createNewCustomer = async (data: ICreateNewCustomer) => {
    const req = await apiCrud.post('/customer', data)
    getAllCustomers()
  }

  const deleteCustomer = async (id: string) => {
    apiCrud.defaults.headers.common.authorization = `Bearer ${token}`
    const req = await apiCrud.delete(`/customer/${id}`)
    console.log(req);
    getAllCustomers()
  }

  const updateCustomer = async (id: string) => {
    apiCrud.defaults.headers.common.authorization = `Bearer ${token}`
    const req = await apiCrud.patch(`/customer/${id}`)
  }

  const listCustomerForId = async (id: string) => {
    apiCrud.defaults.headers.common.authorization = `Bearer ${token}`
    const req = await apiCrud.get(`/customer/${id}`)
    setOneCustomer(req.data)
  }

  return (
    <CrudContext.Provider value={{ getAllCustomers, createNewCustomer, deleteCustomer, updateCustomer, listCustomerForId, handleClose, handleOpen, oneCustomer, customers, modalEdition }}>
      {children}
    </CrudContext.Provider>
  )
}

export default CrudProvider