import { Request, Response } from "express";
import User from "../models/userModel";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
};

export const getUsers = async (req: Request, res: Response) => {
  console.log(req.params);
  const userId = req.params.userId;
  console.log(userId);
  const users = await User.find({_id: userId});
  res.status(200).json(users);
};
