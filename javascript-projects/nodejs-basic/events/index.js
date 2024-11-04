const { EventEmitter } = require('events')

// Membuat event listener untuk birthday
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`)
}

// TODO 1: Membuat instance dari EventEmitter
const myEmitter = new EventEmitter()

// TODO 2: Mendaftarkan event listener 'birthday' ke instance EventEmitter
myEmitter.on('birthday', birthdayEventListener)

// TODO 3: Memicu event 'birthday' dengan memanggil emit dan memberikan parameter
myEmitter.emit('birthday', 'aessaputra')
