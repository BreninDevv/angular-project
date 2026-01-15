import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

export default app;

app.use(express.json());
app.use(cors());

app.use(routes);
