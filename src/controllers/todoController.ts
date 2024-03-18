import Todo from "../models/todoModel";

export const getAllTodos = async (req: any, res: any) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
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
