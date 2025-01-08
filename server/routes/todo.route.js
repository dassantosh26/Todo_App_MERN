/** @format */

import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const todoRouter = Router();

todoRouter.post("/", isAuthenticated, createTodo);
todoRouter.get("/",isAuthenticated, getAllTodo);
todoRouter.put("/:id", isAuthenticated, updateTodo);
todoRouter.delete("/:todoId", isAuthenticated, deleteTodo);

export default todoRouter;
