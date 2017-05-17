import path from 'path'
import test from 'ava'
import fn from '.'

const babelrcPath = path.resolve('fixture', 'babelrc', '.babelrc')
const babelrcJsPath = path.resolve('fixture', 'babelrcjs', '.babelrc.js')
const pkgPath = path.resolve('fixture', 'pkg', 'package.json')

test('async', async t => {
  const cwd = path.join('fixture', 'babelrc', 'app')
  const x = await fn({ cwd })
  t.is(x.path, babelrcPath)
  t.deepEqual(x.babel.presets, ['es2015', 'react'])
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})

test('sync', t => {
  const cwd = path.join('fixture', 'babelrc', 'app')
  const x = fn.sync({ cwd })
  t.is(x.path, babelrcPath)
  t.deepEqual(x.babel.presets, ['es2015', 'react'])
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})

test('parse package.json', async t => {
  const cwd = path.join('fixture', 'pkg')
  const x = await fn({ cwd })
  t.is(x.path, pkgPath)
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})

test('parse package.json - sync', t => {
  const cwd = path.join('fixture', 'pkg')
  const x = fn.sync({ cwd })
  t.is(x.path, pkgPath)
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})

test('parse babelrc.js', async t => {
  const cwd = path.join('fixture', 'babelrcjs')
  const x = await fn({ cwd })
  t.is(x.path, babelrcJsPath)
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})

test('parse babelrc.js - sync', t => {
  const cwd = path.join('fixture', 'babelrcjs')
  const x = fn.sync({ cwd })
  t.is(x.path, babelrcJsPath)
  t.deepEqual(x.babel.plugins, ['transform-class-properties'])
  t.snapshot(x.babel)
})
