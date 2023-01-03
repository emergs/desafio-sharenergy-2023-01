import { AppError } from "../../errors/appError";
import { ILogin } from "../../interfaces/login.interface"
import User from "../../models/user.models";
import { compareSync } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

const loginService = async (login: ILogin) => {
  const user = await User.findOne({ username: login.username }).exec();

  if (!user) {
    throw new AppError('Usuário não existe')
  }

  const passwordMatch = compareSync(login.password, user.password);

  if (!passwordMatch) {
    throw new AppError('Usuário ou senha inválidos', 403)
  }

  const token = jwt.sign(
    {
      name: user.username,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: '24h',
      subject: user.id
    }
  )

  return token;
}

export default loginService