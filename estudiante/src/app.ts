import express, { Application } from "express";
import router from "./routes";
const appConst : Application = express();

export default appConst;

//properties
appConst.set("port",4444);

//middelware
appConst.use(express.json());

//routes
appConst.use("/api",router);