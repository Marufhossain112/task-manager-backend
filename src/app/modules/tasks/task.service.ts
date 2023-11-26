import { Task } from "./task.model";

const addNewTask = async (data: any) => {
  const taskData = new Task(data);
  const result = await taskData.save();
  return result;
};
export const TaskService = {
  addNewTask,
};
