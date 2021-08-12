'use strict'

const minimist = require('minimist')
const { token } = minimist(process.argv.slice(2))

if (!token || token === '') {
  throw new Error('Missing API Token. Use --token')
}

module.exports = {
  token
}
