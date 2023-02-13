import bcrypt from "bcrypt";
import "dotenv/config";
import * as helper from "../helpers";
import Users from "../database/models/authentication";


const signInUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const userFound = await Users.findOne({ email: email });
    const payload = {
      id: userFound.id,
    };
    if (userFound) {
      bcrypt.compare(password, userFound.password, function (error, user) {
        if (error) {
          res.status(500).json({
            error: "Internal server error",
          });
        }
        if (user) {
          const token = helper.token.generate(payload);
          res.status(201).json({
            message: "Login successfully",
            token,
            userId: userFound.id,
            username: userFound.name,
          });
        } else {
          res.status(401).json({
            error: "Invalid email or password",
          });
        }
      });
    } else {
      res.status(403).json({
        error: "User Not Found",
      });
    }
  } catch (error) {}
};


const signUpUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userexist = await Users.find({ email: email.toLowerCase() });
    if (userexist.length) {
      res.status(400).json({
        error: `User with this email ${email} is exists`,
      });
    } else {
      const hashPassword = bcrypt.hashSync(req.body.password, 10);
      const NewUser = await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      const token = helper.token.generate({ userId: NewUser.id });
      res.status(201).json({
        message: "user Created successfully",
        token: token,
        userId: NewUser.id,
        username: NewUser.name,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await Users.find();
    res.status(200).json({
      message: "All user Registered",
      count: allUser.length,
      data: allUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server error",
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const OneUser = await Users.findById(userId);
    if (!OneUser)
      return res.status(404).json({ error: `no user with this Id ${userId}` });
    res.status(200).json({
      message: "User retrevied well",
      data: OneUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server  error",
    });
  }
};

const getUserInfo = async (req, res) => {
  const userId = req.user.userId;
  try {
    const OneUser = await Users.findOne({ _id: userId });
    if (!OneUser)
      return res.status(404).json({ error: `no user with this Id ${userId}` });
    res.status(200).json({
      message: "User retrevied well",
      data: OneUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server error",
    });
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!(await Users.findById(userId)))
      return res
        .status(404)
        .json({ error: `user with this not found ${userId}` });
    const UpdateUser = await Users.findByIdAndUpdate(userId, req.body);
    res.status(201).json({
      message: "User Updated well",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userFound = await Users.findById(req.user.userId);
  if (userFound) {
    const current = bcrypt.compareSync(currentPassword, userFound.password);
    if (current == true) {
      const hashPassword = bcrypt.hashSync(req.body.newPassword, 10);
      const UpdateUser = await Users.findByIdAndUpdate(req.user.userId, {
        password: hashPassword,
      });
      const token = helper.token.generate({ userId: userFound.id});
      res.status(201).json({
        message: `Password Changed successfuly`,
        token,
      });
    } else {
      res.status(409).json({ error: `Incorrect Current Password` });
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!(await Users.findById(userId)))
      return res.status(404).json({ error: `user not found ${userId}` });
    const DeleteUser = await Users.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User Deleted succefully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server error",
    });
  }
};

export {
  signUpUser,
  signInUser,
  getAllUser,
  getOneUser,
  getUserInfo,
  updateUser,
  changePassword,
  deleteUser,
};
