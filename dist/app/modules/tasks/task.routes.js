"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("./task.controller");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = express_1.default.Router();
router.post("/create-task", authMiddleware_1.default, task_controller_1.TaskController.addNewTask);
router.get("/", task_controller_1.TaskController.getAllTasks);
router.get("/:id", task_controller_1.TaskController.getSingleTask);
router.patch("/:id", authMiddleware_1.default, task_controller_1.TaskController.updateSingleTask);
router.delete("/:id", authMiddleware_1.default, task_controller_1.TaskController.deleteSingleTask);
router.get("/analytics/completed", task_controller_1.TaskController.getCompletedTasks);
exports.TaskRoutes = router;
