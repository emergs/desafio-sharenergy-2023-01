import { Router } from 'express'
import { createCustomerController, deleteCustomerController, listAllCustomerController, listCustomerForIdController, updateCustomerController } from '../controllers/customer.controller'
import verifyEmailMiddleware from '../middlewares/verifyEmail.middleware'
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware'

const customerRoutes = Router()

customerRoutes.post('', verifyEmailMiddleware, createCustomerController)
customerRoutes.get('', listAllCustomerController)
customerRoutes.get('/:id', verifyTokenMiddleware, listCustomerForIdController)
customerRoutes.patch('/:id', verifyTokenMiddleware, verifyEmailMiddleware, updateCustomerController)
customerRoutes.delete('/:id', verifyTokenMiddleware, deleteCustomerController)

export default customerRoutes