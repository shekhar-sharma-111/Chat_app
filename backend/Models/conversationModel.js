import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema(
    {
        members:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
                }
                ],

         messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Message",
                default:[],
            }
         ]       
                // lastMessage:{type:String},
                // lastMessageTime:{type:Date}
                
    },{timestamps:true} 
)

const Conversation=mongoose.model('conversation',conversationSchema)
export default Conversation