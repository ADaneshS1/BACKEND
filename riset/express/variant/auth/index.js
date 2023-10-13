const express = require('express')
const app = express()

app.use(express.json())

app.post('/api/user', (req,res) => {
    console.log(req.body);
    const dataDummy = [
        {id:1, username:'root', password:'root', name:'admin', token:''},
        {id:2, username:'root', password:'1234', name:'admin 2', token:''},
        {id:3, username:'root', password:'4421', name:'admin 3', token:''},
    ]
    let body = req.body;
    if(!body || !body.username) {
        return res.status(400).send("Harus ada username")
    }
    if(!body || !body.password) {
        return res.status(400).send("Harus ada password")
    }
    
    let ditemukan = false;
    index = dataDummy.findIndex((data) => data.username == body.username && data.password === body.password)
    if(index >= 0) {
        const token = Math.ceil(Math.random() * 1000000)
        dataDummy[index].token = token
        return res.send({token, message:"Berhasil login"})
    }
    return res.status(401).send('Username or password not found ')
})
app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})  