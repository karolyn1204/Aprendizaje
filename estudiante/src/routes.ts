import { Router } from "express";
import { getUsers } from "./user.controller";

const routerConst : Router = Router();

export default routerConst;


routerConst.route("/users").get(getUsers);







