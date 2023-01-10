import { ICustomer } from "../../interfaces/customer.interface"
import Customer from "../../models/customer.models"

const customerCreateService = async (data: ICustomer) => {
  const customer = new Customer({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    cpf: data.cpf
  })

  const customerCreated = await customer.save()

  return customer
}

export default customerCreateService