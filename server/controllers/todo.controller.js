/** @format */
import { Todo } from "../models/todo.model.js";
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }
    const todo = await new Todo({ title, description });
    todo.save();
    return res.status(201).json({
      message: "Todo created",
      todo,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      todos: todos.length === 0 ? [] : todos,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, description } = req.body;
    // console.log(title);
    // console.log(description);
    // console.log(todoId);

    if (!title && !description) {
      return res.status(400).json({
        message:
          "At least one field (title or description) must be provided to update the todo",
        success: false,
        error: true,
      });
    }
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { title, description },
      { new: true }
    );
    res.status(200).json({
      message: "Todo updated successfully",
      success: true,
      error: false,
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
      message: "Todo deleted successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
