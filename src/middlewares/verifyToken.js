import status from "../config/status";
import * as helper from "../helpers";
import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      return res.status(403).json({ message: "No token provided!" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(status.UNAUTHORIZED)
        .json({ errors: { authentication: "Please, login first." } });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.errors || !decoded) {
      return res
        .status(status.UNAUTHORIZED)
        .json({ error: "Sorry, we fail to authenticate you." });
    }
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized." });
  }
};
