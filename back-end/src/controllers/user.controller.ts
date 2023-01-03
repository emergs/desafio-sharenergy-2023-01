import { Request, Response } from 'express'
import userCreateService from '../services/users/userCreate.service'
import userListService from '../services/users/userList.service'

const userCreateController = (req: Request, res: Response) => {
  try {
    const data = req.body
    const newUser = userCreateService(data)
    return res.status(201).json(newUser)
  }
  catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        "error": err.name,
        "message": err.message
      })
    }
  }
}

const userListController = (req: Request, res: Response) => {
  try {
    const users = userListService()

    return res.send(users)

  } catch (err) {

    if (err instanceof Error) {

      return res.status(400).send({
        "error": err.name,
        "message": err.message
      })
    }
  }
}

export { userCreateController, userListController }