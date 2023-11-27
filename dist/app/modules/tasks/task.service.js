"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_model_1 = require("./task.model");
// create a new task
const addNewTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const taskData = new task_model_1.Task(data);
    const result = yield taskData.save();
    return result;
});
// retrieve all tasks
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.find({});
    return result;
});
// retrieve a single task
const getSingleTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield task_model_1.Task.findById(id);
    if (!isExist) {
        throw new Error("No task found");
    }
    const result = yield task_model_1.Task.findById(id);
    return result;
});
// update a  task
const updateSingleTask = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield task_model_1.Task.findById(id);
    if (!isExist) {
        throw new Error("No task found");
    }
    const result = yield task_model_1.Task.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// delete a  task
const deleteSingleTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield task_model_1.Task.findById(id);
    if (!isExist) {
        throw new Error("No task found");
    }
    const result = yield task_model_1.Task.findOneAndDelete({ _id: id });
    return result;
});
// get completed tasks
const getCompletedTasks = (day) => __awaiter(void 0, void 0, void 0, function* () {
    const filteredDate = new Date();
    filteredDate.setDate(filteredDate.getDate() - day || 7);
    const result = yield task_model_1.Task.find({
        completionStatus: "done",
        dueDate: { $gte: filteredDate },
    });
    return result;
});
exports.TaskService = {
    addNewTask,
    getAllTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
    getCompletedTasks,
};
