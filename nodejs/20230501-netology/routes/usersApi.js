// ===========================================================================
// 1. IMPORTS
// ===========================================================================
// 1.1. Express
import express from "express";
// 1.2. Middlewares
import uploadPhotoMW from "../middleware/uploadPhoto.js";
import multer from "multer";
// 1.3. "User" class
import { User } from "../models/User.js";
// 1.4. "Database" array
import { setUserList, userList } from "../database/database.js";
// 1.5. Other
import path from "node:path";
import { rootPath } from "../index.js";



// ===========================================================================
// 2. ROUTING
// ===========================================================================
const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  res.json(userList);
})


// Get user
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);

  if (user !== undefined) {
    res.json(user);
  } else {
    res.status(404);
    res.json("User not found");
  }
})


// Add user
router.post("/", multer().none(), (req, res) => {
  const { name } = req.body;
  const newUser = new User(name);
  setUserList(userList.concat(newUser));
  
  res.status(201);
  res.json(newUser);
})


// Edit user
router.put("/:id", multer().none(), (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);
  
  if (user !== undefined) {
    const name = req.body.name || user.name;
    const newUser = { ...user, name };
    setUserList(userList.map((user) => (user.id === id ? newUser : user)));
    res.json(newUser);
  } else {
    res.status(404);
    res.json("User not found");
  }
})


// Delete user
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userList.find((user) => user.id === id);

  if (user !== undefined) {
    setUserList(userList.splice(id, 1));
    res.send("OK");
  } else {
    res.status(404);
    res.json("User not found");
  }
})


// Error handling
router.get("/err", (req, res) => {
  throw new Error("Error message");
})


// File uploading
router.post("/upload-photo", uploadPhotoMW.single("photo"), (req, res) => {
  if (req.file) {
    res.json(req.file.path);
  } else {
    res.json(null);
  }
})


// File downloading
router.get("/:id/download-photo", (req, res) => {
  res.download(path.join(rootPath, "public/images/demo.webp"), "newName.webp", (err) => {
    if (err) {
      res.status(404);
      res.json();
    }
  });
})



// ===========================================================================
// 3. EXPORT ROUTER
// ===========================================================================
export default router;
