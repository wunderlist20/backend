const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

const post = {
    "user_id": 1,
    "title": "Jewelery",
    "task": "Ergonomic Rubber Sausages",
    "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
    "setDate": "Tuesday",
    "completed": 0,
};

describe("server.js", () => {
    beforeEach(async () => {
        await db("todos").truncate();
    });
    describe("GET /todos", () => {
        it('should return status code 200 OK', async () => {
            const response = await request(server).get("/api/todos");
            expect(response.status).toBe(200);
        });
        it('should return json', async () => {
            const response = await request(server).get("/api/todos");
            expect(response.type).toBe("application/json");
        });
        it('should return an array', async () => {
            const response = await request(server).get("/api/todos");
            expect(Array.isArray(response.body)).toBeTruthy();
        });
    });

describe("GET /todos/:id", () => {
    it('should return status code 200 OK', async () => {
        const response = await request(server).get("/api/todos");
        expect(response.status).toBe(200);
    });
    it('should return json', async () => {
        const response = await request(server).get("/api/todos");
        expect(response.type).toBe("application/json");
    });
    it('should return requested object', async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
        await request(server)
        .post("/api/todos")
        .send(post);
      const response = await request(server).get("/api/todos/1");
      expect(response.body.title).toBe("Jewelery");
    });
    it('should return status code 404 if object does not exist', async () => {
        const response = await request(server).get('/api/todos/40');
        expect(response.status).toBe(404);
    });
});

describe("POST /todos", () => {
    it('should return status code 201 if successful', async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
        const response = await request(server)
            .post("/api/todos")
            .send(post);
        expect(response.status).toBe(201);
    });
    it('should return json if successful', async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
        const response = await request(server)
            .post("/api/todos")
            .send(post);
        expect(response.type).toBe("application/json");
    });
    it('should return created object if successful', async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
        const response = await request(server)
            .post("/api/todos")
            .send(post);
        expect(typeof response).toBe("object");
        expect(response.body.title).toBe("Jewelery");
    });
    it('should fail with status code 404 if information is incomplete', async () => {
        const response = await request(server)
            .post("/api/todos")
            .send({
                title: "testing is boring",
                task: "finish testing today"
            });
        expect(response.status).toBe(404);
    });
});

describe("DEL /todos/:id", () => {
    it("Should return status code 200 OK", async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
      await request(server)
        .post("/api/todos")
        .send(post);
      const response = await request(server).delete("/api/todos/1");
      expect(response.status).toBe(200);
    });
    it("should return json", async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
      await request(server)
        .post("/api/todos")
        .send(post);
      const response = await request(server).get("/api/todos/1");
      expect(response.type).toBe("application/json");
    });
    it("should return deleted object", async () => {
        const post = {
            "user_id": 1,
            "title": "Jewelery",
            "task": "Ergonomic Rubber Sausages",
            "notes": "Quam sapiente natus ut ut cum. Voluptate esse modi. Voluptatum laboriosam nulla molestiae aperiam. Eius dolores rerum quas. Error est facere deleniti numquam non molestiae. Ut qui quos inventore dolorem ducimus sunt et dolorem blanditiis.",
            "setDate": "Tuesday",
            "completed": 0,
        };
      await request(server)
        .post("/api/todos")
        .send(post);
      const response = await request(server).delete("/api/todos/1");
      expect(response.body.title).toBe("Jewelery");
    });
    it("should return status code 404 if object doesn't exist", async () => {
      const response = await request(server).delete("/api/todos/10");
      expect(response.status).toBe(404);
    });
  });
});