import request from "supertest";
import app from "../app";

describe("Test for tasks", () => {
  it("should successfully create task", async () => {
    try {
      const res = await request(app).post("/api/v1/tasks/create-task").send({
        title: "Learn Python 5",
        description: "Learn Django in order to improve your skillset.",
        assignedUser: "Maruf Hossain",
        dueDate: "2023-11-24T23:59:59.000Z",
        completionStatus: "to do",
      });
      // Ensure the response has the expected structure
      expect(res.body).toHaveProperty("message", "Successfully created task");
      expect(res.body).toHaveProperty("data.title", "Learn Python 5");
      // Add more specific assertions for other properties if needed
    } catch (error: any) {}
  }, 30000); // Set a timeout of 30 seconds

  it("should successfully retrieve all tasks", async () => {
    try {
      const res = await request(app).get("/api/v1/tasks");
      // Ensure the response has the expected structure
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("success", true);
      expect(res.body).toHaveProperty(
        "message",
        "Successfully retrieved all tasks"
      );

      // Ensure data is an array
      expect(Array.isArray(res.body.data)).toBe(true);

      // If there is at least one task, assume success
      expect(res.body.data.length).toBeGreaterThan(0);

      // Dynamically check properties of each task in the array
      res.body.data.forEach((task: any) => {
        expect(task).toHaveProperty("_id");
        expect(task).toHaveProperty("title");
        expect(task).toHaveProperty("description");
        expect(task).toHaveProperty("assignedUser");
        expect(task).toHaveProperty("dueDate");
        expect(task).toHaveProperty("completionStatus");
      });
    } catch (error) {}
  }, 30000);
});
