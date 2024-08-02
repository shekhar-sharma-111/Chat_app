import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    
    origin:[ "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId =(receiverId)=>{
  return userSocketMap[receiverId]
}
const userSocketMap={};

io.on('connection',(socket)=>{
    console.log('a new client connected',socket.id)

    const userId=socket.handshake.query.userId;
    console.log(userId)
    userId&&(userSocketMap[userId]=socket.id);
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
    // listen to event used in both client and server side
    socket.on('disconnect', () => {
        console.log('a client disconnected',socket.id )
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
        });
      
})
export { app, io, server };