const { cleanEnv, str } = require('envalid');

/** A sanitized, immutable environment object */
const validateEnv = () =>
    cleanEnv(process.env, {
        DB_URI: str(),
        DB_NAME: str(),
        HOST: str(),
        PORT: str()
    });

module.exports = validateEnv();
