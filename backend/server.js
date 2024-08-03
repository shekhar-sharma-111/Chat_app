
import path from 'path';
import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import cookieParser from 'cookie-parser';
import { app, server } from "./socket/socket.js";

dotenv.config();




// Middleware
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use("/", authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


// Example root route
// app.get("/", (req, res) => {
//   res.send('hello world');
//   console.log(req.cookies);
// });

// Deployment setup
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Uncomment these endpoints if needed for cookie testing
// Set Cookie Endpoint
// app.get("/set-cookie", (req, res) => {
//   res.cookie("exampleCookie", "cookieValue", {
//     httpOnly: true,
//     secure: false, // Use false in development for testing with HTTP
//     maxAge: 24 * 60 * 60 * 1000, // 1 day
//   });
//   res.send("Cookie has been set");
// });

// Get Cookie Endpoint
// app.get("/get-cookie", (req, res) => {
//   const exampleCookie = req.cookies.jwt;
//   res.send(`Cookie Value: ${exampleCookie}`);
//   console.log(req.cookies.jwt);
// });

// Start the server

const port = process.env.PORT || 5000;
server.listen(port, () => {
  connectDB();
  console.log(`Server running on port: ${port}`);
});