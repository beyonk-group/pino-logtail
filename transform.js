'use strict'

const Pino = require('pino')
const levels = Pino.levels.labels
const logger = require('./logger.js')

function safeParse (src) {
  try {
    return JSON.parse(src)
  } catch (error) {
    logger.log('error', 'unparseable log message', { exception: error.message, original: JSON.stringify(src) })
  }
}

function handleLog (log, cb) {
  const { level, time, pid, hostname, msg = '', context = {}, ...params } = log
  logger.log(msg, levels[level] || 'info', { ...params }, { system: { pid, hostname }, ...context })
  cb()
}

module.exports = {
  safeParse,
  handleLog
}