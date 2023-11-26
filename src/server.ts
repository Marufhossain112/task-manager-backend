import mongoose from 'mongoose';
import app from './app';
const port = 5000;
async function main() {
    try {
        await mongoose.connect(`mongodb+srv://only_me:112022@cluster0.efpjwcu.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database successfully connected");
        app.listen(port, () => {
            console.log(`Database is running on port ${port}`);
        });
    } catch (error) {
        console.log("Database not connected", error);
    }
}
main();

