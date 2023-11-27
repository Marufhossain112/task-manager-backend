import express from "express";
import { TaskRoutes } from "../app/modules/tasks/task.routes";
import { UserRoutes } from "../app/modules/users/user.routes";
const router = express.Router();
const moduleRoutes = [
  {
    path: "/tasks",
    route: TaskRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
