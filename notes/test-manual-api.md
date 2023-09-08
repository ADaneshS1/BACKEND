# Catatan ringkas ()

- Jalankan server 'npm run start' dan klik 'send'
- Simpan 'Ctr + s'

## Test manual dengan terminal
- 'curl -X GET https://localhost:3000'
- 'curl -X POST -H 'content-type: application/json' -d '{"name": "Ahmad Danesh"}'  https://localhost:3000'
- 'curl -X PUT https://localhost:3000'
- 'curl -X DELETE https://localhost:3000'

## Test otomatis menggunakan supertest
instal = npm i -D supertest
import supertest = const request = require('supertest');
import aplikasi express = const app = require('./app');
panggil path root = const response = await require(app).get('/');
test status = expect(response.status).toBe(200);
test body = expect(response.body).toEqual({message:'Hello World'});

Contoh post
const data = {message: "Test"};
const response = await response(app)
 .post('/api/post')
 .send(data)

afterAll( () => {
    app.close()  <!-- Menutup server setelah semua test selesai -->
} );

NB: 
- Tidak perlu menjalankan server secara manual
- Pada app.js, untuk app.listen harus di export agar tidak error

const server = app.listen()
module.exports = server;