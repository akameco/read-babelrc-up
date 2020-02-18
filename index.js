'use strict'
const path = require('path')
const fs = require('fs')
const findUp = require('find-up')
const json5 = require('json5')

// https://babeljs.io/docs/en/config-files#supported-file-extensions
const BABELRC = ['.babelrc', '.babelrc.json', 'babel.config.json']
const BABELRC_JS = [
  '.babelrc.js',
  '.babelrc.cjs',
  '.babelrc.mjs',
  'babel.config.js',
  'babel.config.cjs',
  'babel.config.mjs',
]
const PKG = 'package.json'

const readConfigJs = fp => {
  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const configModule = require(fp)
    return configModule && configModule.__esModule
      ? configModule.default || undefined
      : configModule
  } catch (error) {
    error.message = `${fp}: Error while loading config = ${error.message}`
    throw error
  }
}

const loadConfig = fp => {
  const file = path.basename(fp)
  const obj = fs.readFileSync(fp, 'utf-8')
  const matchBabelRc = /^(?<babelrc>\.babelrc(?:.json|$)|babel\.config\.json)$/giu
  const matchBabelRcJs = /^(?<babelrc>\.babelrc|babel\.config)[.](?:js|cjs|mjs)$/giu

  switch (file) {
    case matchBabelRcJs.test(file) ? file : null:
      return readConfigJs(fp)
    case matchBabelRc.test(file) ? file : null:
      return json5.parse(obj)
    case PKG:
      return JSON.parse(obj).babel
    default:
      return {}
  }
}

module.exports = opts => {
  return findUp([...BABELRC, ...BABELRC_JS, PKG], opts).then(fp => {
    if (!fp) {
      return {}
    }

    const babel = loadConfig(fp)

    return { babel, path: fp }
  })
}

module.exports.sync = opts => {
  const fp = findUp.sync([...BABELRC, ...BABELRC_JS, PKG], opts)

  if (!fp) {
    return {}
  }

  const babel = loadConfig(fp)

  return { babel, path: fp }
}
