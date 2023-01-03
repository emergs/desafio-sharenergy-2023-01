import { Schema } from 'mongoose'
import { IUser } from '../interfaces/user.interface';
import mongoose from 'mongoose'

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: true },
});

const User = mongoose.model('User', userSchema);
export default User;
