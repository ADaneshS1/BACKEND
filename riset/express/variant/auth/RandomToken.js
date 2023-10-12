function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
}
  
  // Contoh penggunaan untuk membuat token acak dengan panjang 12 karakter
const randomToken = generateRandomToken(12);
console.log(randomToken);
  