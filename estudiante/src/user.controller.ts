import { Request, Response } from "express";

let users = [
    {
        "id":"1",
        "name":"diana",
        "lastname":"salas",
        "age":34
    },
    {
        "id":"2",
        "name":"natalia",
        "lastname":"diaz",
        "age":26
    },
    {
        "id":"3",
        "name":"carlos",
        "lastname":"mosquera",
        "age":18
    }
];

export function getUsers(req:Request,res:Response):Response {
    
    return res.json(users);
}


