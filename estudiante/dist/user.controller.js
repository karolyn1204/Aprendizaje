"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUsers = void 0;
let users = [
    {
        "id": "1",
        "name": "diana",
        "lastname": "salas",
        "age": 34
    },
    {
        "id": "2",
        "name": "natalia",
        "lastname": "diaz",
        "age": 26
    },
    {
        "id": "3",
        "name": "carlos",
        "lastname": "mosquera",
        "age": 18
    }
];
function getUsers(req, res) {
    return res.json(users);
}
exports.getUsers = getUsers;
function getUserById(req, res) {
    const id = req.params.id;
    return res.json(users.find(user => user.id == id));
}
exports.getUserById = getUserById;
function createUser(req, res) {
    let user = req.body;
    user.id = "" + (users.length + 1);
    users.push(user);
    return res.json(user);
}
exports.createUser = createUser;
