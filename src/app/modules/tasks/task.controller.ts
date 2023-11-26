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
//update a task
const updateSingleTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const result = await TaskService.updateSingleTask(id, payload);
    res.json({
      success: true,
      message: "Successfully updated a task",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
// delete a single task
const deleteSingleTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await TaskService.deleteSingleTask(id);
    res.json({
      success: true,
      message: "Successfully deleted a single task",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
// analytics on completed tasks
const getCompletedTasks = async (req: Request, res: Response) => {
  try {
    const day = Number(req.query.day);
    // console.log(day);
    const result = await TaskService.getCompletedTasks(day);
    res.json({
      success: true,
      message: "Successfully retrieved completed tasks",
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
  updateSingleTask,
  deleteSingleTask,
  getCompletedTasks,
};
