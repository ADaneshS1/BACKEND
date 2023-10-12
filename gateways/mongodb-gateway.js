const { MongoClient } = require('mongodb');
const { insertOne } = require('../riset/operations/ExampleInsert');
const { findMany } = require('../riset/operations/ExampleFind');
const { deleteById } = require('../riset/operations/ExampleDelete');
const { updateById } = require('../riset/operations/ExampleUpdate');

let collection;

const connectionDB = async () => {
    const url = 'mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/';
    const client = new MongoClient(url);
    await client.connect();
    const dbName = 'development';
    const collectionName = 'user';
    const database = client.db(dbName);
    collection = database.collection(collectionName)
}

const savingData = async (name, age) => {
    try {
        let id = Math.ceil(Math.random() * 1000);
        await insertOne(collection, {id,name,age})
    } catch(err) {
        console.log("Terjadi error di savingData:", err)
    }
};

const showAllData = async () => {
    let data = [];
    try {
        data = await findMany(collection)
    } catch(err) {
        console.log("Terjadi error di showAllData:", err)
    } finally {
        return data
    }
};

const getDataByName = (name) => {
    return findByname(dataMemory, name);
};

// const editDataName = (id,name) => {
//     return dataMemory;
// };20-

const removeData = async (id) => {
    if (typeof id === 'string') {
        id = parseInt(id)
    };  
    await deleteById(collection,id)
    const data = findMany(collection)
    return data
};

const editNamaUmurData = async (id,name,age) => {
    if (typeof id === 'string') {
        id = parseInt(id)
    };
    
    await updateById(collection,id, {name,age})
    const data = findMany(collection)
    return data
}

const isIdExisted = async (id) => {
    if (typeof id === 'string') {
        id = parseInt(id)
    };

    try {
        await isIdExist(collection,id)
    } catch(err) {
        console.log("Terjadi error di isIdExist:", err)
    } 
}

module.exports = {savingData, showAllData, removeData, getDataByName, editNamaUmurData, isIdExisted, connectionDB};