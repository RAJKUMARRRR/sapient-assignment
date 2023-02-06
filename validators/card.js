const Joi = require("joi");
var luhn = require("luhn");
const { luhnCheck } = require("../utils/utils");

/**
 * Validation schema for card payload
 */
const schema = Joi.object({
  name: Joi.string().required(),
  cardNumber: Joi.string()
    .max(19)
    .message("Card Number should be maximun if 19 digits")
    .pattern(/^[0-9]+$/)
    .message("Card Number should be a number")
    .custom((value, helper) => {
      /**
       * Luhn 10 check for card number
       */
        if(!luhnCheck(value)) {
            return helper.message('Invalid Card Number')
        } else {
            return true
        }
    })
    .required(),
  limit: Joi.number()
    .required(),
});

module.exports = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ errors: error });
    }
    next() 
}