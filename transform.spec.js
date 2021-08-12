'use strict'

const { stub } = require('sinon')
const { handleLog } = require('./transform.js')
const logger = require('./logger.js')
const { expect } = require('@hapi/code')

describe('transform', () => {
  describe('#handleLog()', () => {
    const time = new Date().getTime()
    const msg = { level: 5, time, pid: 0, hostname: 'localhost', msg: 'foo', bar: 'baz' }
    const cb = stub()

    beforeEach(() => {
      stub(logger, 'log')
      handleLog(msg, cb)
    })

    afterEach(() => {
      logger.log.restore()
    })

    it('has called callback', () => {
      expect(
        cb.callCount
      ).to.equal(1)
    })

    it('has called logger', () => {
      expect(
        logger.log.callCount
      ).to.equal(1)
    })

    it('has passed correct arguments to logger', () => {
      expect(
        logger.log.firstCall.args
      ).to.equal(
        [
          'foo',
          'info',
          { bar: 'baz' },
          { system: { hostname: 'localhost', pid: 0 } }
        ]
      )
    })
  })
})
