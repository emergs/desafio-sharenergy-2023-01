import { AppError } from "../../errors/appError"
import Customer from "../../models/customer.models"

const ListAllCustomersService = async () => {
  const customer = await Customer.find()

  if (!customer) {
    throw new AppError("Nunhum usuário encontrado")
  }

  return customer
}

export default ListAllCustomersService