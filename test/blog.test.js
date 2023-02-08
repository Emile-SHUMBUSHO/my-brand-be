import request from "supertest";
import app from "../src/app";
import Blog from "../src/database/models/blog";

describe("Blog Test", () => {
  let token;
  let res;
  beforeAll(async () => {
    await request(app)
      .post("/auth/login")
      .send({
        email: "emmanuel@gmail.com",
        password: "Sms@2020",
      })
      .then((res) => {
        token = res.body.token;
      });
  }, 50000);
  describe("Returns the blog", () => {
    it("Returns all blogs", async () => {
      res = await request(app).get("/blogs");
      expect(res.status).toBe(200);
    }, 50000);
    it("Return a single blog with", async () => {
      const obj = new Blog();
      res = await request(app).get("/blogs/" + obj._id);
      expect(res.status).toBe(200);
    }, 50000);
  });
});
