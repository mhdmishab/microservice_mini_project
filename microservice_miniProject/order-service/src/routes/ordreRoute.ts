import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orderController";

const ordreRoute = Router();

ordreRoute.post('/',createOrder);
ordreRoute.get('/',getOrders);

export default ordreRoute;