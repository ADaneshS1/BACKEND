# Evaluasi

## Ketika run test api, maka konflik pada port.

Dicari: Bagaimana agar bisa jalan dan efisient?

### Solusi:
1. Close server local, kemudian jalankan test api
   - Tutup server = `Ctr + c`
   - Running server = `npm run start`
2. Mengubah port server local dari 3000 ke 3001. Karena port yang digunakan oleh smarttest adalah 3000.
   
```js
// Untuk running
const port = 3001;

const server = app.listen(port, () => {
    console.log("Halo cuyy, Server sudah jalan di https://localhost:" + port)
});

module.exports = server;