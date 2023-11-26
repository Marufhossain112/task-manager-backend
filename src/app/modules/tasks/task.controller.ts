import { TaskService } from "./task.service";
import { Response, Request } from "express";
// create new task
const addNewTask = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await TaskService.addNewTask(data);
    res.json({
      success: true,
      message: "Successfully created task",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
// get all tasks
const getAllTasks = async (req: Request, res: Response) => {
  try {
    const result = await TaskService.getAllTasks();
    res.json({
      success: true,
      message: "Successfully retrieved all tasks",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
// get a single tasks
const getSingleTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await TaskService.getSingleTask(id);
    res.json({
      success: true,
      message: "Successfully retrieved a single task",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const TaskController = {
  addNewTask,
  getAllTasks,
  getSingleTask,
};
