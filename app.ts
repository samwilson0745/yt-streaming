import express from "express";
import { json } from "body-parser";
import cors from "cors";
const app = express();

import { videoRouter } from "./routes/video";

app.use(cors())
app.use(json())

app.use("/api/video", videoRouter);

export { app }