import express, { Application } from "express";
import router from "./routes";
const app : Application = express();

export default app;

//properties
app.set("port",4444);

//middelware
app.use(express.json());

//routes
app.use("/api",router);