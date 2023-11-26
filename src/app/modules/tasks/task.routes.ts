import express from "express";
import { TaskController } from "./task.controller";
const router = express.Router();
router.post("/create-task", TaskController.addNewTask);
router.get("/", TaskController.getAllTasks);
router.get("/:id", TaskController.getSingleTask);
router.patch("/:id", TaskController.updateTask);
export const TaskRoutes = router;
