const getCards = require('./get-cards');
const createCard = require('./create-card');

module.exports = {
    paths:{
        '/cards':{
            ...getCards,
            ...createCard
        }
    }
}