import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js"
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/", authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);
app.use(cookieParser());

app.get("/", (req, res) => {
  
  res.send('hello world');
  console.log(req.cookies)
});



// // Set Cookie Endpoint
// app.get("/set-cookie", (req, res) => {
//   res.cookie("exampleCookie", "cookieValue", {
//     httpOnly: true,
//     secure: false, // Use false in development for testing with HTTP
//     maxAge: 24 * 60 * 60 * 1000, // 1 day
//   });
//   res.send("Cookie has been set");
// });

// // Get Cookie Endpoint
// app.get("/get-cookie", (req, res) => {
//   // const exampleCookie = req.cookies.exampleCookie;
//   // res.send(`Cookie Value: ${exampleCookie}`);
//   console.log(req.cookies.jwt);
// });

app.listen(port, () => {
  connectDB();
  console.log(`server running on port :${port}`);
});
