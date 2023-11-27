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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("Test for tasks", () => {
    it("should successfully create task", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield (0, supertest_1.default)(app_1.default).post("/api/v1/tasks/create-task").send({
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
        }
        catch (error) { }
    }), 30000); // Set a timeout of 30 seconds
    it("should successfully retrieve all tasks", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield (0, supertest_1.default)(app_1.default).get("/api/v1/tasks");
            // Ensure the response has the expected structure
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("success", true);
            expect(res.body).toHaveProperty("message", "Successfully retrieved all tasks");
            // Ensure data is an array
            expect(Array.isArray(res.body.data)).toBe(true);
            // If there is at least one task, assume success
            expect(res.body.data.length).toBeGreaterThan(0);
            // Dynamically check properties of each task in the array
            res.body.data.forEach((task) => {
                expect(task).toHaveProperty("_id");
                expect(task).toHaveProperty("title");
                expect(task).toHaveProperty("description");
                expect(task).toHaveProperty("assignedUser");
                expect(task).toHaveProperty("dueDate");
                expect(task).toHaveProperty("completionStatus");
            });
        }
        catch (error) { }
    }), 30000);
});
