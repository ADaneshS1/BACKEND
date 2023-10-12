const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/user', (req, res) => {
    console.log(req.body);
    let { name } = req.body;
    res.send('hello ' + name);
});
app.get('/api/user', (req, res) => {
    res.send('get data');
});

app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:3000")
})