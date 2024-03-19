import Todo from "../models/todoModel";
import { Request, Response } from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const data = await Todo.find({});

    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addTodo = async (req: any, res: any) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Fetch a single product using a similar approach to above
// const singleTodo = await Todo.findById(req.params.id);
export const getTodo = async (req: Request, res: Response) => {
  try {
    const data = await Todo.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
