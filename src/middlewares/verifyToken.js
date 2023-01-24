import status from "../config/status";
import * as helper from "../helpers";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).send({ message: "No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token." });
  }
};
