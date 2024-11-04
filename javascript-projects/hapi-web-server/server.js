const Hapi = require('@hapi/hapi')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  })

  // Definisikan rute-rute di sini
  const routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Homepage'
      },
    },
    {
      method: '*',
      path: '/',
      handler: (request, h) => {
        return 'Halaman tidak dapat diakses dengan method tersebut'
      },
    },
    {
      method: 'GET',
      path: '/about',
      handler: (request, h) => {
        return 'About page'
      },
    },
    {
      method: '*',
      path: '/about',
      handler: (request, h) => {
        return 'Halaman tidak dapat diakses dengan method tersebut'
      },
    },
    {
      method: 'GET',
      path: '/hello/{name?}',
      handler: (request, h) => {
        const name = request.params.name || 'Stranger'
        return `Hello, ${name}!`
      },
    },
    {
      method: '*',
      path: '/{any*}',
      handler: (request, h) => {
        return 'Halaman tidak ditemukan'
      },
    },
  ]

  // Menambahkan rute ke server
  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
