import { TaskService } from "./task.service";
import { Response, Request } from "express";


const addNewTask = async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
  
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
  
export const TaskController = {
  addNewTask,
};
