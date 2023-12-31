import express from "express";
import { TaskController } from "./task.controller";
import authenticateUser from "../../middleware/authMiddleware";
const router = express.Router();
router.post("/create-task", authenticateUser, TaskController.addNewTask);
router.get("/", TaskController.getAllTasks);
router.get("/:id", TaskController.getSingleTask);
router.patch("/:id", authenticateUser, TaskController.updateSingleTask);
router.delete("/:id", authenticateUser, TaskController.deleteSingleTask);
router.get("/analytics/completed", TaskController.getCompletedTasks);
export const TaskRoutes = router;
