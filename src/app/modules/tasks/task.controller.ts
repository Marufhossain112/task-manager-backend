import { TaskService } from "./task.service";
import { Response, Request } from "express";

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

export const TaskController = {
  addNewTask,
  getAllTasks,
};
