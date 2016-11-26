/* eslint-disable global-require, no-process-env */

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./store.dev.js');
} else {
  module.exports = require('./store.prod.js');
}
