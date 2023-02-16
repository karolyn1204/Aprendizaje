import { Request, Response } from "express";
import {users} from "./array.user";


export function getUsers(req:Request,res:Response):Response {
    
    return res.json(users);
}

