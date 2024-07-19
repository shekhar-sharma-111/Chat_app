import Conversation from "../Models/conversationModel.js";
import Message from "../Models/messageModel.js";
// send messages
export const sendMessage=async(req,res)=>{
  
    try {
       const {message}=req.body;
       const {id:receiverId} =req.params;
       const senderId=req.user._id;
      let conversation= await Conversation.findOne({members:{$all : [senderId,receiverId]}});
      if(!conversation){
        conversation=await Conversation.create({
            members:[senderId,receiverId],
        })}
        const newMessage =new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message
        })
        

        if (newMessage){
            conversation.messages.push(newMessage._id);
            await Promise.all([ conversation.save(),newMessage.save()]);
        }
        res.status(201).json(newMessage)
    } catch (error) {
        console.log('error in send message controller',error.message)
        res.status(500).json({error:"internals server error"});
    }

}

// get conversation function
export const  getMessage=async (req,res)=>{
    try {
        const{ id:userChatId}=req.params;
        const senderId=req.user._id;
        const conversation =await Conversation.findOne({
            members:{$all:[senderId,userChatId]},
        }).populate('messages')
       if(!conversation){
        // res.status(404).json({error:"conversation not found"})
        res.status(200).json(['start new conversation']);
       }
       const messages=conversation.messages
       res.status(200).json(messages)
       console.log(messages)
        
    } catch (error) {
        console.log('error in get message controller',error.message)
        res.status(500).json({error:"internals server error"});
        
    }
}