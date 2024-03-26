import express from "express";
import cors from "cors";

// configurar dotenv
import dotenv from "dotenv"
import { emailRouter } from "./routes/email.routes.js";
import errorHandler from "./middlewares/error-handler-middleware.js";
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/que_curso/email", emailRouter.router);
app.use(errorHandler);
export default app;