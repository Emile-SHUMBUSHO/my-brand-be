import Subscribers from "../database/models/subscribers";
import status from "../config/status";

export const saveSubscriberEmail = async(req, res) => {
    try{
        const subscribers = new Subscribers({
            email: req.body.email
        })
        subscribers.save((error)=>{
            if (error) {
                res.status(status.SERVER_ERROR).json({ message: error.message });
              }
              res
                .status(status.CREATED)
                .json({ message: "subscriber's email saved successfully", subscribers });
            });
    }catch (error){
        return res.status(status.BAD_REQUEST).json({ message: error.message });
    }
}

export const allSubscribers = [];

export const subscribers = (req, res) => {
    try {
        Subscribers.find((error, subscriber) => {
        if (error) {
          res.status(status.SERVER_ERROR).json(error);
        } else {
          res.json(subscriber.email);
        }
      });
    } catch (error) {
      return res.status(status.SERVER_ERROR).json(error);
    }
  };

export const sendEmailToSubscribers = async(req, res)=>{
    const transport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpass'
        }
    });

    const mailOptions = {
        from: 'youremail',
        to: URLSearchParams.join(','),
        subject: `New post: now is published`
    }
}