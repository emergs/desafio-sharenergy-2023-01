import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const login = req.body
  const token = await loginService(login)
  return res.status(200).json(token)
}

export default loginController;