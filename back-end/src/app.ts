import "reflect-metadata"
import "express-async-errors"
import "dotenv/config"
import express from 'express';
import userRoutes from './routes/users.routes';
import mongoose from "./database";
import loginRoutes from "./routes/login.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import customerRoutes from "./routes/customer.routes";

const app = express();
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/customer', customerRoutes)

app.use(handleErrorMiddleware)

app.listen(process.env.PORT, () => {
  console.log("Servidor executando na porta: " + process.env.PORT)
  mongoose.set('strictQuery', false);
})

export default app;