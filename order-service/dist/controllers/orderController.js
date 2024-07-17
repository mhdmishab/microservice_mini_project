"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrder = void 0;
const axios_1 = __importDefault(require("axios"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, product, quantity } = req.body;
    // Check if the user exists by calling the User Service
    const userResponse = yield axios_1.default.get(`http://user-service:3001/users/${userId}`);
    if (!userResponse.data) {
        return res.status(404).json({ message: "User not found" });
    }
    const newOrder = new orderModel_1.default({ userId, product, quantity });
    yield newOrder.save();
    res.status(201).json(newOrder);
});
exports.createOrder = createOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield orderModel_1.default.find();
    res.status(200).json(orders);
});
exports.getOrders = getOrders;
