import { AppError } from "../../errors/appError"
import { ICustomerUpdate } from "../../interfaces/customer.interface"
import Customer from "../../models/customer.models"


const updateCustomerService = async (id: string, data: ICustomerUpdate) => {
  const customer = await Customer.findByIdAndUpdate(id, {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    cpf: data.cpf
  })

  if (!customer) {
    throw new AppError("Usuário não encontrado")
  }

  const customerEditeded = await Customer.findById(id)

  return customerEditeded
}

export default updateCustomerService