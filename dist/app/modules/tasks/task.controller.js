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
exports.TaskController = void 0;
const task_service_1 = require("./task.service");
// create new task
const addNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield task_service_1.TaskService.addNewTask(data);
        res.json({
            success: true,
            message: "Successfully created task",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// get all tasks
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield task_service_1.TaskService.getAllTasks();
        res.json({
            success: true,
            message: "Successfully retrieved all tasks",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// get a single tasks
const getSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield task_service_1.TaskService.getSingleTask(id);
        res.json({
            success: true,
            message: "Successfully retrieved a single task",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
//update a task
const updateSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const result = yield task_service_1.TaskService.updateSingleTask(id, payload);
        res.json({
            success: true,
            message: "Successfully updated a task",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// delete a single task
const deleteSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield task_service_1.TaskService.deleteSingleTask(id);
        res.json({
            success: true,
            message: "Successfully deleted a single task",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// analytics on completed tasks
const getCompletedTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const day = Number(req.query.day);
        // console.log(day);
        const result = yield task_service_1.TaskService.getCompletedTasks(day);
        res.json({
            success: true,
            message: "Successfully retrieved completed tasks",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.TaskController = {
    addNewTask,
    getAllTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
    getCompletedTasks,
};
