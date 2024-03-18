import express from "express";

const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

// ROUTES
const todos = [
  { id: 1, title: "coding" },
  { id: 2, title: "cleaning" },
];

app.get("/todos", (req, res) => {
  res.status(200).send(todos);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title, //title: title
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

export default app;
