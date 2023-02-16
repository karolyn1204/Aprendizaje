"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.route("/users").get(user_controller_1.getUsers);
router.route("/user/:id").get(user_controller_1.getUserById);
router.route("/user").post(user_controller_1.createUser);
exports.default = router;
