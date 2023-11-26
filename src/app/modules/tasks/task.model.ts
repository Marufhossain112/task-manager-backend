import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  assignedUser: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completionStatus: {
    type: String,
    enum: ["to do", "running", "done"],
    required: true,
  },
});

export const Task = model("Task", taskSchema);
