import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/appError'
import Customer from '../models/customer.models'

const verifyEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // const verifyEmail = await Customer.findOne({ email: req.body.email })

  // if (verifyEmail) {
  //   throw new AppError("Email já existe")
  // }

  next()
}
export default verifyEmailMiddleware