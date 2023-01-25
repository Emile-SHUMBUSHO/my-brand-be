import mongoose from "mongoose";
import bcrypt from "bcrypt";
import 'dotenv/config';
import * as helper from '../../helpers';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export const User = mongoose.model("User", userSchema);

export const signup = async (name, email, password) => {
  const user = new User({ name, email, password });
  await user.save();
  return user;
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");
  const payload = {
    id: user._id
  }
  const token = helper.token.generate(payload);
  return {user, token};
};
