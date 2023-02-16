"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const array_user_1 = require("./array.user");
function getUsers(req, res) {
    return res.json(array_user_1.users);
}
exports.getUsers = getUsers;
