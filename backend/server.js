import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/", authRoutes);
app.use('/api/messages',messageRoutes);


app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  connectDB();
  console.log(`server running on port :${port}`);
});
