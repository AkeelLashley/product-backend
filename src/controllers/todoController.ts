const todos = [
  { id: 1, title: "coding" },
  { id: 2, title: "cleaning" },
];

export const getAllTodos = (req, res) => {
  res.status(200).send(todos);
};









export const addTodo = (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title, //title: title
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// export const getAllTodos = async (req, res) => {
//   try {
//     const todos = [{ title: "Hello" }, { title: "Welcome" }];

//     res.status(200).json({
//       status: "success",
//       results: todos.length,
//       data: todos,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };
