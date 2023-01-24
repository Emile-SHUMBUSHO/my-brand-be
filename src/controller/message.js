import Message from "../database/models/message";
import status from "../config/status";

export const createMessage = async (req, res) => {
  try {
    const message = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    message.save((error) => {
      if (error) {
        res.status(status.SERVER_ERROR).json(error);
      } else {
        res.json(message);
      }
    });
  } catch (error) {
    return res.status(status.SERVER_ERROR).json(error);
  }
};

export const allMessages = (req, res)=>{
  try{
    Message.find((error, message)=>{
      if(error){
        res.json(error);
      }else{
        res.json(message);
      }
    })
  }catch(error){
    return res.status(status.SERVER_ERROR).json(error);
  }
}

export const deleteMessage = (req, res)=>{
  try{
    Message.findByIdAndRemove(req.params.id, (error)=>{
      if(error){
        res.send(error);
      }else{
        res.status(status.OK).json({message:'Message deleted successfully'});
      }
    })
  }catch(error){
    return res.status(status.SERVER_ERROR).json(error);
  }
}
