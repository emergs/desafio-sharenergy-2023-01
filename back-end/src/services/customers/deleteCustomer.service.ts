import { AppError } from "../../errors/appError"
import Customer from "../../models/customer.models"


const deleteCustomerService = async (id: string) => {
  const customer = await Customer.findByIdAndRemove(id)

  if (!customer) {
    throw new AppError('Usuário não encontrado')
  }

  return customer
}

export default deleteCustomerService 