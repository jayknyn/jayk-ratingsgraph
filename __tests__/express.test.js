const request = require('supertest');
const app = require('../server/server-app.js');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get("/")
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
  })
})