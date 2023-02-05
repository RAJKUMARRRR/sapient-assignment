const request = require('supertest')
const app = require('../app')

describe('Cards API', () => {
    it('GET /cards should return list of cards', () => {
        return request(app)
            .get('/cards')
            .expect(200)
            .then((response) => {
                if (response.body.length > 0) {
                    expect(response.body).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({
                                name: expect.any(String),
                                cardNumber: expect.any(Number),
                                limit: expect.any(Number),
                                balance: expect.any(Number)
                            })
                        ])
                    )
                } else {
                    expect(response.body).toHaveLength(0)
                }
            })
    })

    it('POST /cards should create new card', () => {
        return request(app)
            .post('/cards')
            .send({
                name: 'John',
                cardNumber: '123456789',
                limit: 50000
            })
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        name: expect.any(String),
                        cardNumber: expect.any(Number),
                        limit: expect.any(Number),
                        balance: expect.any(Number)
                    })
                )
            })
    })
})