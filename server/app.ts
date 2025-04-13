import express from "express";
import "dotenv/config";
import pinoHttp from "pino-http";
import logger from "./config/logger";
import router from "./routes";
import { handleError, jsonParseError } from "./middleware/error";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use(jsonParseError)
app.use(pinoHttp({ logger, useLevel: "trace" }));
app.use("/v1", router);
app.use(handleError);

export default app;
