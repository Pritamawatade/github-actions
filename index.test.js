const request = require('supertest')
const app = require('./index')

describe('Test the root path', () => {
    it("GET / shuld return 'Hello World!'", async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Hello World!')
    })

    it("GET /:id shuld return 'Hello World! Your id is 123'", async () => {
        const res = await request(app).get('/123')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Hello World! Your id is 123')
    })
})