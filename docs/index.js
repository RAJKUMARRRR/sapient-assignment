const components = require('./components')
const basicInfo = require('./basicInfo')
const servers = require('./servers')
const tags = require('./tags')
const cards = require('./cards')

module.exports = {
    ...basicInfo,
    ...components,
    ...servers,
    ...tags,
    ...cards
}