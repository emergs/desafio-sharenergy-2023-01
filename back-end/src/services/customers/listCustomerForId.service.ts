import { AppError } from "../../errors/appError"
import Customer from "../../models/customer.models"

const listCustomerForIdService = async (id: string) => {
  const customer = await Customer.findById(id)

  if (!customer) {
    throw new AppError("Usuário não encontrado")
  }

  return customer
}

export default listCustomerForIdService