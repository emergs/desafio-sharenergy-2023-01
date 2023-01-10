import { IUserCreate, IUser } from "../../interfaces/user.interface";
import User from "../../models/user.models";
import { hashSync } from 'bcryptjs'

const userCreateService = async ({ username, password }: IUserCreate) => {
  const user = new User({
    username: username,
    password: hashSync(password, 10)
  });
  await user.save();

  return user
}

export default userCreateService