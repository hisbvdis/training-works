// ===========================================================================
// 1. IMPORTS
// ===========================================================================
// 1.1. Express
import express from "express";
// 1.3. "User" class
import { User } from "../models/User.js";
// 1.4. "Database" array
import { setUserList, userList } from "../database/database.js";



// ===========================================================================
// 2. ROUTING
// ===========================================================================
const router = express.Router();


// Show page "All users"
router.get("/", (req, res) => {
  res.render("users/userList", { pageTitle: "Users", users: userList });
})


// Show page "Add user"
router.get("/add", (req, res) => {
  res.render("users/add", { pageTitle: "Add user", user: {}});
})


// Handle form "Add user"
router.post("/add", (req, res) => {
  const { name } = req.body;
  const newUser = new User(name);
  userList.push(newUser);

  res.redirect("/users");
})


// Show page "User"
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);

  if (user !== undefined) {
    res.render("users/userPage", { pageTitle: "User page", user: user });
  } else {
    res.status(404);
    res.redirect("/404");
  }
})


// Show page "Edit user"
router.get("/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);

  if (user !== undefined) {
    res.render("users/edit", { pageTitle: "Edit user", user: user });
  } else {
    res.status(404);
    res.redirect("/404");
  }
})


// Handle form "Edit user"
router.post("/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);

  if (user !== undefined) {
    const name = req.body.name || user.name;
    const newUser = { ...user, name };
    setUserList(userList.map((user) => (user.id === id ? newUser : user)));
    res.redirect(`/users/${id}`);
  } else {
    res.status(404);
    res.redirect("/404");
  }
})


// Handle button click "Delete user"
router.post("/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  const userListIndex = userList.findIndex((user) => user.id === id);
  
  if (userListIndex !== -1) {
    userList.splice(userListIndex, 1)
    res.redirect("/users");
  } else {
    res.status(404);
    res.redirect("/404");
  }
})



// ===========================================================================
// 3. EXPORT ROUTER
// ===========================================================================
export default router;
