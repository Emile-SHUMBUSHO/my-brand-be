import { signupController } from './controller/auth';
import { signup } from './database/models/authentication';

jest.mock('./database/models/authentication');

describe('signupController', () => {
    test('it should return a 201 status and the user object if signup is successful', async () => {
        const req = {
            body: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: 'password123'
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        signup.mockResolvedValue({ name: 'John Doe', email: 'johndoe@example.com' });

        await signupController(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: 'User created successfully',
            user: { name: 'John Doe', email: 'johndoe@example.com' }
        });
    });

    test('it should return a 400 status and the error message if signup fails', async () => {
        const req = {
            body: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: 'password123'
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
