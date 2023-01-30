import { signupController, loginController } from './controller/auth';
import { signup, login } from './database/models/authentication';

jest.mock('./database/models/authentication');

describe('signupController', () => {
    test('it should return a 201 status and the user object if signup is successful', async () => {
        const req = {
            body: {
                name: 'Joma Camilla',
                email: 'jomarina@example.com',
                password: 'Password@123'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        signup.mockResolvedValue({ name: 'Joma Camilla', email: 'jomarina@example.com' });

        await signupController(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: 'User created successfully',
            user: { name: 'Joma Camilla', email: 'jomarina@example.com' }
        });
    });

    test('it should return a 400 status and the error message if signup fails', async () => {
        const req = {
            body: {
                name: 'Joma Camilla',
                email: 'jomarina@example.com',
                password: 'Password@123'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        signup.mockRejectedValue(new Error('Invalid email address'));

        await signupController(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email address' });
    });
});

describe("loginController", () => {
    test("it should return a 200 status and the user object if login is successful", async () => {
      const req = {
        body: {
          email: "user@example.com",
          password: "password",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      login.mockResolvedValue({
        email: "user@example.com",
        password: "password",
      });
  
      await loginController(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "User logged in successfully",
        user: { email: "user@example.com", password: "password" },
      });
    });
  
    test("it should return a 400 status code and error message if user fails to login", async () => {
      const req = {
        body: {
          email: "user@example.com",
          password: "password",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      login.mockRejectedValue(new Error("Invalid email or password"));
      await loginController(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid email or password",
      });
    });
  });
