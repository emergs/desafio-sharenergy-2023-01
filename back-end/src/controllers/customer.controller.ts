import { Request, Response } from "express";
import customerCreateService from "../services/customers/createCustomer.service";
import deleteCustomerService from "../services/customers/deleteCustomer.service";
import ListAllCustomersService from "../services/customers/listAllCustomers";
import listCustomerForIdService from "../services/customers/listCustomerForId.service";
import updateCustomerService from "../services/customers/updateCustomer.service";

const createCustomerController = async (req: Request, res: Response) => {
  const data = req.body
  const dataResponse = await customerCreateService(data)
  return res.status(201).json(dataResponse)
}

const listAllCustomerController = async (req: Request, res: Response) => {
  const dataResponse = await ListAllCustomersService()
  return res.status(200).json(dataResponse)
}

const listCustomerForIdController = async (req: Request, res: Response) => {
  const data = req.params.id
  const dataResponse = await listCustomerForIdService(data)
  return res.status(201).json(dataResponse)
}

const updateCustomerController = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  const dataResponse = await updateCustomerService(id, data)
  return res.status(201).json(dataResponse)
}

const deleteCustomerController = async (req: Request, res: Response) => {
  const data = req.params.id
  const dataResponse = await deleteCustomerService(data)
  return res.status(204).json(dataResponse)
}

export { createCustomerController, listCustomerForIdController, updateCustomerController, deleteCustomerController, listAllCustomerController }