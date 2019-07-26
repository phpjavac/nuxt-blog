const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
var env = require('./utils/envalid');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const { HOST, PORT } = env;

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)


  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(PORT, HOST)
  consola.ready({
    message: `Server listening on http://${HOST}:${PORT}`,
    badge: true
  })
}
start()