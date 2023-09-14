const express = require('express');
const { postDataUserHandler } = require('./handlres/post-data-user-handler');
const { getDataUserHandler } = require('./handlres/get-data-user-handler');
const { putDataUserHandler } = require('./handlres/put-data-user-handler');
const { delDataUserHandler } = require('./handlres/del-data-user-handler');
const app = express();

// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.use(express.static('public'));

app.use(express.json());

app.get('/api/user', getDataUserHandler);

app.post('/api/user', postDataUserHandler);

app.put('/api/user', putDataUserHandler);

app.delete('/api/user', delDataUserHandler);

// Untuk running
const port = 3001;

const server = app.listen(port, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:" + port)
});

module.exports = server;

// Untuk menjalankan ketik node app.js di terminal. Untuk cancel tekan Ctr + c.