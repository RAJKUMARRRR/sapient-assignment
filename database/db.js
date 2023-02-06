const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')

/** 
 * Connect to the in-memory database.
*/
const connect = async () => {
    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()

    await mongoose.connect(mongoUri, { dbName: 'sapient' })
    console.log(`MongoDB successfully connected to ${mongoUri}`)
}

module.exports.connect = connect

/**
 * Drop database, close the connection.
 */
module.exports.closeConnection = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
}
