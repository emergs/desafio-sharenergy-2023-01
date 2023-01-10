import { Router } from 'express'
import { userCreateController, userListController } from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.post('', userCreateController)
userRoutes.get('', userListController)

export default userRoutes