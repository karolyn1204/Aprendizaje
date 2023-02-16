import { Router } from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const router : Router = Router();

router.route("/users").get(getUsers);

router.route("/user/:id").get(getUserById);

router.route("/user").post(createUser);
export default router;


