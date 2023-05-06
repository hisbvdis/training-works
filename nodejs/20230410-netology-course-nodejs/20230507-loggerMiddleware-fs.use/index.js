import express from "express";
import { logger } from "./logger.js";

const app = express();
app.listen(3000);

app.use(logger);
