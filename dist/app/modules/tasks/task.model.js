"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedUser: { type: String, required: true },
    dueDate: { type: Date, required: true },
    completionStatus: {
        type: String,
        enum: ["to do", "running", "done"],
        required: true,
    },
});
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
