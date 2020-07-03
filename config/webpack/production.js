process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

throw 'Running production.js'

module.exports = environment.toWebpackConfig()
