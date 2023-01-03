import mongoose, { Schema } from "mongoose";
import { ICustomer } from "../interfaces/customer.interface";

const customerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cpf: { type: String, required: true, maxlength: 11 }
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
