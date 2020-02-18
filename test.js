import path from 'path'
import test from 'ava'
import fn from '.'

const babelrcPath = path.resolve('fixture', 'babelrc', '.babelrc')
const babelrcJsPath = path.resolve('fixture', 'babelrcjs', '.babelrc.js')
const babelConfigJsPath = path.resolve(
  'fixture',
  'babelconfigjs',
  'babel.config.js'
)
const pkgPath = path.resolve('fixture', 'pkg', 'package.json')

test('parse babel.config.js', async t => {
  const cwd = path.join('fixture', 'babelconfigjs')
  const { path: p, babel } = await fn({ cwd })
  t.is(p, babelConfigJsPath)
  t.snapshot(babel)
})

test('parse babel.config.js - sync', t => {
  const cwd = path.join('fixture', 'babelconfigjs')
  const { path: p, babel } = fn.sync({ cwd })
  t.is(p, babelConfigJsPath)
  t.snapshot(babel)
})

test('async', async t => {
  const cwd = path.join('fixture', 'babelrc', 'app')
  const { path: p, babel } = await fn({ cwd })
  t.is(p, babelrcPath)
  t.snapshot(babel)
})

test('sync', t => {
  const cwd = path.join('fixture', 'babelrc', 'app')
  const { path: p, babel } = fn.sync({ cwd })
  t.is(p, babelrcPath)
  t.snapshot(babel)
})

test('parse package.json', async t => {
  const cwd = path.join('fixture', 'pkg')
  const { path: p, babel } = await fn({ cwd })
  t.is(p, pkgPath)
  t.snapshot(babel)
})

test('parse package.json - sync', t => {
  const cwd = path.join('fixture', 'pkg')
  const { path: p, babel } = fn.sync({ cwd })
  t.is(p, pkgPath)
  t.snapshot(babel)
})

test('parse babelrc.js', async t => {
  const cwd = path.join('fixture', 'babelrcjs')
  const { path: p, babel } = await fn({ cwd })
  t.is(p, babelrcJsPath)
  t.snapshot(babel)
})

test('parse babelrc.js - sync', t => {
  const cwd = path.join('fixture', 'babelrcjs')
  const { path: p, babel } = fn.sync({ cwd })
  t.is(p, babelrcJsPath)
  t.snapshot(babel)
})
