import Subscribers from "../database/models/subscribers";
import status from "../config/status";
import "dotenv/config";
import nodemailer from "nodemailer";

export const saveSubscriberEmail = async (req, res) => {
  try {
    const subscribers = new Subscribers({
      email: req.body.email,
    });
    subscribers.save((error) => {
      if (error) {
        res.status(status.SERVER_ERROR).json({ message: error.message });
      }
      res.status(status.CREATED).json({
        message: "subscriber's email saved successfully",
        subscribers,
      });
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ message: error.message });
  }
};

// Set up the transporter object with email provider information
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Define a function to send the email
const sendEmail = (recipient, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const notifySubscribers = async (req, res, blog) => {
  try {
    const blogTitle = blog.title
    const blogLink = blog.imageUrl
    // Retrieve the email addresses of subscribed users from the MongoDB database
    Subscribers.find({}).toArray((err, users) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(users)
      // Filter the subscribed users
      const subscribedUsers = users.filter((user) => user.subscribed);
      // Extract the email addresses
      const emailAddresses = subscribedUsers.map((user) => user.email);
      // Send an email notification to each subscribed user
      emailAddresses.forEach((user) => {
        sendEmail(
          user.email,
          "New post published",
          `Check out our latest post: "${blogTitle}" at ${blogLink}`
        );
      });
      // Return a success response
      res.status(200).json({
        message: "Post published and email notifications sent",
      });
    });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ message: error.message });
  }
};
