import { signupController, loginController } from "../src/controller/auth";
import { signup, login } from "../src/database/models/authentication";

jest.mock("../src/database/models/authentication");
describe("signupController", () => {
  it("it should return a 201 status and the user object if signup is successful", async () => {
    const req = {
      body: {
        name: "Eric Moize",
        email: "eric@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    signup.mockResolvedValue({
      name: "Eric Moize",
      email: "eric@example.com",
    });

    await signupController(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "User created successfully",
      user: { name: "Eric Moize", email: "eric@example.com" },
    });
  });

  it("it should return a 400 status and the error message if signup fails", async () => {
    const req = {
      body: {
        name: "Eric Moize",
        email: "eric@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    signup.mockRejectedValue(new Error("Invalid email address"));

    await signupController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid email address" });
  });
});

describe("loginController", () => {
  it("it should return a 200 status and the user object if login is successful", async () => {
    const req = {
      body: {
        email: "eric@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    login.mockResolvedValue({
      email: "eric@example.com",
      password: "password123",
    });

    await loginController(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "User logged in successfully",
      user: { email: "eric@example.com", password: "password123" },
    });
  });

  it("it should return a 400 status code and error message if user fails to login", async () => {
    const req = {
      body: {
        email: "eric@example.com",
        password: "password123",
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