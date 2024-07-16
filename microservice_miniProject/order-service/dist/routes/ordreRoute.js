"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const ordreRoute = (0, express_1.Router)();
ordreRoute.post('/', orderController_1.createOrder);
ordreRoute.get('/', orderController_1.getOrders);
exports.default = ordreRoute;
