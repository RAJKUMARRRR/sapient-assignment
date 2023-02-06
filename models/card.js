const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *   schemas:
 *     Card:
 *       type: object
 *       required:
 *         - name
 *         - cardNumber
 *         - limit
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the card
 *         name:
 *           type: string
 *           description: The name of the card holder
 *         cardNumber:
 *           type: number
 *           description: Credit Card number
 *         limit:
 *           type: number
 *           description: Card Limit
 *       example:
 *         id: 63e048dc7eac49b9b92444c9
 *         name: John
 *         cardNumber: 4485275742308327
 *         limit: 5000
 */
const cardSchema = new mongoose.Schema({
    name: { type: String, require: true },
    cardNumber: { type: Number, require: true },
    balance: { type: Number, default: 0 },
    limit: { type: Number, require: true }  
})

module.exports = mongoose.model('card', cardSchema)