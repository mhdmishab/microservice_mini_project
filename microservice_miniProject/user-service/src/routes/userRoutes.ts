import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/',createUser);
userRouter.get('/:id',getUsers);


export default userRouter;