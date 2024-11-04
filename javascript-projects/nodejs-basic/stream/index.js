const fs = require('fs')
const path = require('path')

// Menetapkan alamat lengkap secara dinamis untuk input.txt dan output.txt
const inputPath = path.resolve(__dirname, 'input.txt')
const outputPath = path.resolve(__dirname, 'output.txt')

// Membuat stream readable untuk membaca dari file input.txt
const readableStream = fs.createReadStream(inputPath, { encoding: 'utf-8' })

// Membuat stream writable untuk menulis ke file output.txt
const writableStream = fs.createWriteStream(outputPath)

// Menggunakan metode pipe untuk mengalirkan data dari readable stream ke writable stream
readableStream.pipe(writableStream)

// Menangani event 'end' pada readable stream untuk menampilkan pesan ketika proses selesai
readableStream.on('end', () => {
  console.log('Data berhasil disalin dari input.txt ke output.txt')
})
