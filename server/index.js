const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoDB = require('./utils/mongoDB')
const env = require('./utils/envalid')

// Get environment variables
const { isDev, HOST, PORT } = env;
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
// Start mongoDB service
mongoDB.start();
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // const { host, port } = nuxt.options.server

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
