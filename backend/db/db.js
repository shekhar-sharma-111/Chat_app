

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



const connectDB = async () => {
  try {
    // const mongoURI = process.env.MONGO_URI;
    const mongoURI = 'mongodb+srv://Shekhar:Shekhar7206@cluster0.z1lxhch.mongodb.net/Chat-app?retryWrites=true&w=majority&appName=Cluster0';
    // console.log(mongoURI)
    if (!mongoURI) {
      throw new Error('MONGO_URI environment variable not defined');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

