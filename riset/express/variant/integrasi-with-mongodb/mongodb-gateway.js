const { MongoClient } = require('mongodb');


const connectionDB = async (url,dbName,collectionName) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const dbName = 'Development';
        const collectionName = 'users';
        const database = client.db(dbName);
        const collection = database.collection(collectionName)
        return {collection, client}
    } catch(error) {
        console.error("terjadi error ", error, " di intregasi-with-mongodb")
    }
   
}

module.exports = {connectionDB}