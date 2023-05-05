import express from "express";
import cors from "cors";
import multer from "multer";



/* ======================================================================= */
/* 0. DATABASE */
/* ======================================================================= */
let todoList = [
  {id: 0, title: "Buy MacBook", status: false},
  {id: 1, title: "Go to recruiting center", status: false},
  {id: 2, title: "By milk", status: false},
]

class Todo {
  constructor(title="") {
    this.id = (todoList.reduce((max, {id}) => id > max ? id : max, 0) + 1) || 0;
    this.title = title;
    this.status = false;
  }
}



/* ======================================================================= */
/* 1. CREATE EXPRESS APPLICATION */
/* ======================================================================= */
const app = express();
const upload = multer();

// CORS
app.use(cors());

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log( `Server is running on http://localhost:${PORT}/` )
});



/* ======================================================================= */
/* 2. ROUTING */
/* ======================================================================= */
// Get all todos
app.get("/api/todos/", (req, res) => {
  res.json(todoList);
})


// Get certain todo
app.get("/api/todo/:id", (req, res) => {
  const { id } = req.params;
  const todo = todoList.find((todo) => todo.id === Number(id));
  
  if (todo !== undefined) {
    res.json(todo);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})


// Add todo
app.post("/api/todo/", upload.array(), (req, res) => {
  const { title } = req.body;

  const newTodo = new Todo(title);
  todoList.push(newTodo);
  
  res.status(201);
  res.json(newTodo);
})


// Edit todo
app.put("/api/todo/:id", upload.array(), (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  
  if (todoList.some((item) => item.id === Number(id))) {
    todoList[id] = { ...todoList[id], title, status: Boolean(status) };
    res.json(todoList[id]);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})


// Delete todo
app.delete("/api/todo/:id", (req, res) => {
  const { id } = req.params;

  if (todoList.some((item) => item.id === Number(id))) {
    todoList.splice(id, 1);
    res.json(true);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})
