import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);
// // router.get("/user", getAllUsers);
// // router.get("/user/:id", getUserById);
// // router.put("/user", updateUser);
// // router.delete("/user", deleteUser);

export default router;
