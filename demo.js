'use strict'

const logger = require('pino')().child({ a: 'property' })
logger.info('hello child!')
