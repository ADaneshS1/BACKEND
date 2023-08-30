const express = require('express')
const app = express();

// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.get('/', (req, res) => {
    res.send("Hello world");
})

// Untuk running
app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di localhost:3000")
})

// Untuk menjalankan tulis node app.js di terminal. Untuk cancel tekan Ctr + c.