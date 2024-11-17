import mongoose from "mongoose";

let isConnected = false;
const DB_NAME = "e-yoga";

export async function connectToDatabase() {
    if (isConnected) {
        console.log("=> Using existing database connection");
        return;
    }

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("Please add your MongoDB URI to .env");
        }

        const db = await mongoose.connect(`${uri}/${DB_NAME}`);

        isConnected = !!db.connections[0].readyState;
        console.log("=> MongoDB connected successfully");
    } catch (error) {
        console.error("=> Failed to connect to MongoDB", error);
    }
}
