const express = require('express');
const { connectionDB } = require('./mongodb-gateway');

const url = 'mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/';

let myCollection, myClient;

let isServerDBReady = false;

const initDB = async () => {
    try {
      if(!isServerDBReady) {
        return res.send("Server DB belum siap")
      }
      const { collection, client } = await connectionDB(url,'risetexpress','users');
      myCollection = collection;
      myClient = client;
      console.log('server db berjalan');
    } catch (error) {
      console.log(error);
    }
  };
  
initDB();

const app = express();

app.use(express.json())
app.post('/api/user', async (req,res) => {
  console.log(req.method)
  if(req.method !== 'post') {
    return res.status(405).send("Method tidak sesuai")
  }
    try {
        console.log(req.body)
        let {name} = req.body
        const insertManyResult = await myCollection.insertOne(req.body)
        console.log(` document successfully inserted.\n`, insertManyResult);
        res.send('hello ' + name);
    } catch(error) {
        console.error("terjadi error ", error, " di intregasi-with-mongodb")
    }
   
});

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})  