const { CleanEnv, cleanEnv, host, port, str, num } = require('envalid')

/**
 * Environment variables declaration
 * @interface Env
 * @extends CleanEnv
 */
/** A sanitized, immutable environment object */
const validateEnv = () =>
  cleanEnv(process.env, {
    HOST: host(),
    PORT: port(),
    API_PREFIX: str(),
    DB_URI: str(),
    DB_NAME: str(),
    GITHUB_OWNER: str(),
    GITHUB_CLIENT_ID: str(),
    GITHUB_CLIENT_SECRET: str(),
    COMMENTS_PEPO: str(),
    COMMENTS_LABEL: str(),
    COMMENTS_LIMIT: num(),
    PAGE_LIMIT: num(),
  });

module.exports = validateEnv();
