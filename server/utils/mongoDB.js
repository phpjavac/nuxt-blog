const mongoose = require('mongoose')
const consola = require('consola')
const env = require('./envalid')

/**
 * Start mongoDB service
 * 启动mongoDB
 */
const start = () => {
  // Get environment variables
  const { isDev, DB_URI, DB_NAME } = env;

  // Enable debugging if in development environment
  mongoose.set('debug', isDev);

  // Connect to MongoDB
  mongoose.connect(DB_URI, {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  // Listen for mongoose connection successful
  mongoose.connection.on('connected', () => {
    // Create models
    require('../../models/article');

    // Print message
    consola.ready({
      message: 'MongoDB Connected',
      badge: true,
    });
  });

  // Listen for mongoose connection failed
  mongoose.connection.on('error', (error) => {
    consola.error({
      message: `MongoDB connection error: ${error}`,
      badge: true,
    });
  });
};

module.exports = { start };
