const express = require('express')
const app = express();

// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/', (req,res) => {
    let name = req.body.name
    res.send("Oyy " + name);
});

app.put('/', (req,res) => {
    res.send("Update data");
});

app.delete('/', (req,res) => {
    res.send("Delete data");
});

// Untuk running
app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di https://localhost:3000")
})

// Untuk menjalankan ketik node app.js di terminal. Untuk cancel tekan Ctr + c.