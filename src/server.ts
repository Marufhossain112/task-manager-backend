import mongoose from "mongoose";
import "dotenv/config";
import app from "./app";
const port = 5000;
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Database successfully connected");
    app.listen(port, () => {
      console.log(`Database is running on port ${port}`);
    });
  } catch (error) {
    console.log("Database not connected", error);
  }
}
main();
