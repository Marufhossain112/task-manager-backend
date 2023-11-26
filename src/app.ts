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
app.use("*", (req, res) => {
  res.status(500).json({ success: false, error: "Invalid url" });
});
export default app;
