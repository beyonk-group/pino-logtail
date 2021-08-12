'use strict'

const { Logtail } = require('@logtail/node')
const { token } = require('./config.js')
const logger = new Logtail(token)

module.exports = logger
