process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

throw 'Running development.js'

module.exports = environment.toWebpackConfig()
