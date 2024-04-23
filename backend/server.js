import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import morgan from "morgan";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

// database config
mongoose.connect('mongodb+srv://cseiubatgoswami:uDmzPkpFfVIJZgCU@cluster0.phluhf4.mongodb.net/chat-app-backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connection to database is successful');
    })
    .catch((e) => {
        console.error('Failed to connect to database:', e.message);
        process.exit(1); // terminate the application
    });


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use(morgan('dev'));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	// connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});