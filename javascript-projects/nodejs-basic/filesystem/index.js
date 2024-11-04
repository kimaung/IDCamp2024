const fs = require("fs");
const path = require("path");

// Mendapatkan path absolut ke file notes.txt
const filePath = path.resolve(__dirname, "filesystem", "notes.txt");

// Baca file notes.txt secara asyncrhonus
fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file:", err);
    return;
  }
  // Tampilkan text pada console
  console.log(data);
});
