'use strict'
const path = require('path')
const fs = require('fs')
const findUp = require('find-up')
const json5 = require('json5')

const BABELRC = '.babelrc'
const BABELRC_JS = '.babelrc.js'
const PKG = 'package.json'

const readConfigJs = fp => {
  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const configModule = require(fp)
    return configModule && configModule.__esModule
      ? configModule.default || undefined
      : configModule
  } catch (err) {
    err.message = `${fp}: Error while loading config = ${err.message}`
    throw err
  }
}

const loadConfig = fp => {
  const file = path.basename(fp)
  const obj = fs.readFileSync(fp, 'utf-8')

  switch (file) {
    case BABELRC_JS:
      return readConfigJs(fp)
    case BABELRC:
      return json5.parse(obj)
    case PKG:
      return JSON.parse(obj).babel
    default:
      return {}
  }
}

module.exports = opts => {
  return findUp([BABELRC, BABELRC_JS, PKG], opts).then(fp => {
    if (!fp) {
      return {}
    }

    const babel = loadConfig(fp)

    return { babel, path: fp }
  })
}

module.exports.sync = opts => {
  const fp = findUp.sync([BABELRC, BABELRC_JS, PKG], opts)

  if (!fp) {
    return {}
  }

  const babel = loadConfig(fp)

  return { babel, path: fp }
}
