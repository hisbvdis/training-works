import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";



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

// BODY PARSING
app.use(bodyParser.json());                       // application/json
app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded
app.use(upload.array());                          // multipart/form-data
app.use(express.static('public'));                // multipart/form-data

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log( `Server is running on http://localhost:${PORT}/` )
});



/* ======================================================================= */
/* 2. ROUTING */
/* ======================================================================= */
// GET ALL TODOS
app.get("/api/todos/", (req, res) => {
  res.json(todoList);
})


// GET TODO
app.get("/api/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todoList.find((todo) => todo.id === id);

  if (todo !== undefined) {
    res.json(todo);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})


// ADD TODO
app.post("/api/todo/", (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo(title);
  todoList.push(newTodo);
  
  res.status(201);
  res.json(newTodo);
})


// EDIT TODO
app.put("/api/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todoList.find((todo) => todo.id === id);

  if (todo !== undefined) {
    const title = req.body.title || todo.title;
    const status = Boolean(req.body.status) || todo.status;
    const newTodo = { ...todo, title, status };
    todoList = todoList.map((todo) => (todo.id === id ? newTodo : todo));
    res.json(newTodo);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})


// DELETE TODO
app.delete("/api/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todoList.find((todo) => todo.id === id);
  if (todo !== undefined) {
    todoList.splice(id, 1);
    res.json(true);
  } else {
    res.status(404);
    res.json("Todo not found");
  }
})
