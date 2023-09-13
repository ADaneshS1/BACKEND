# Front End

## Buat tampilan FE

- Buat folder public di root
- Buat tampilan html di dalam public `index.html`
- Tambahkan di `app.js` `app.use(express.static('public'));`. Digunakan untuk membaca seluruh folder `public` yang ada di `root`
- Untuk root api ubah dari `/` ke `/api/user`
- Update `thunder client` dan `testing` sebelumnya hanya `http://localhost:3001` ke `http://localhost:3001/api/user` 

## Buat UI untuk send data
- Menggunakan tailwind

```html
<body class="bg-blue-300 p-4">

    <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">

        <h1 class="text-2xl font-semibold mb-12 text-center">Formulir Pengiriman Data</h1>

        <form id="dataForm">

          <div class="mb-4">
            <label for="nama" class="block text-gray-600">Nama:</label>
            <input type="text" id="nama" name="nama" class="w-full border rounded-md py-2 px-3"
              placeholder="Masukkan Nama Anda" required>
          </div>

          <div class="mb-4">
            <label for="umur" class="block text-gray-600">Umur:</label>
            <input type="number" id="umur" name="umur" class="w-full border rounded-md py-2 px-3"
              placeholder="Masukkan Umur Anda" required>
          </div>

          <div class="mt-4">
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Kirim Data</button>
          </div>

        </form>

      </div>

```


- tambahkan cdn tailwind