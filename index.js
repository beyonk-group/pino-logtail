#!/usr/bin/env node

'use strict'

const pump = require('pump')
const split = require('split2')
const through = require('through2')
const { safeParse, handleLog } = require('./transform.js')

const transport = through.obj(
  (log, _enc, callback) => {
    handleLog(log, callback)
  }
)

pump(process.stdin, split(safeParse), transport)
