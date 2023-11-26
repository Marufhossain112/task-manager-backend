import express from "express";
import { TaskRoutes } from "../app/modules/tasks/task.routes";
const router = express.Router();
const moduleRoutes = [
  {
    path: "/tasks",
    route: TaskRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
