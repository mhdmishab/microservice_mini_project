import axios from "axios";
import { Request, Response } from "express";
import orderModel from "../models/orderModel";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, product, quantity } = req.body;
  // Check if the user exists by calling the User Service
  console.log(userId, product, quantity);
  
  const userResponse = await axios.get(
    `http://localhost:3001/users/${userId}`
  );
  if (!userResponse.data) {
    return res.status(404).json({ message: "User not found" });
  }

  const newOrder = new orderModel({ userId, product, quantity });
  await newOrder.save();
  res.status(201).json(newOrder);
};

export const getOrders = async (req: Request, res: Response) => {
    const orders = await orderModel.find();
    console.log(orders)
    res.status(200).json(orders);
  }; 
