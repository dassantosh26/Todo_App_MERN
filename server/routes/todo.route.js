/** @format */

import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", getAllTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:todoId", deleteTodo);

export default todoRouter;
