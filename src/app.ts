import express, { Application } from "express";
import cors from "cors";
import router from "./routes";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);
export default app;
