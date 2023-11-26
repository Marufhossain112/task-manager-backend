import express from "express";
import { TaskController } from "./task.controller";
const router = express.Router();
router.post("/create-task", TaskController.addNewTask);
router.get("/", TaskController.getAllTasks);
export const TaskRoutes = router;
