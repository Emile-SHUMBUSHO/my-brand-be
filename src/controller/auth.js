import "dotenv/config";
import status from "../config/status";
import { signup, login } from '../database/models/authentication';

export const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await signup(name, email, password);
        res.status(status.CREATED).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(status.BAD_REQUEST).json({ message: error.message });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await login(email, password);
        res.status(status.OK).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(status.BAD_REQUEST).json({ message: error.message });
    }
};
