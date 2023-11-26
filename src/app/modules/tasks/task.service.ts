import { Task } from "./task.model";
// create a new task
const addNewTask = async (data: any) => {
  const taskData = new Task(data);
  const result = await taskData.save();
  return result;
};
// retrieve all tasks
const getAllTasks = async () => {
  const result = await Task.find({});
  return result;
};
// retrieve a single task
const getSingleTask = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};
// update a single task
const updateTask = async (id: string, payload: any) => {
  const result = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const TaskService = {
  addNewTask,
  getAllTasks,
  getSingleTask,
  updateTask,
};
