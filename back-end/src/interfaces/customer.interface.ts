export interface ICustomer {
  name: string,
  email: string,
  phone: string,
  address: string,
  cpf: string
}

export interface ICustomerUpdate {
  name?: string,
  email?: string,
  phone?: string,
  address?: string,
  cpf?: string
}
