import path from 'path';
import test from 'ava';
import fn from '.';

const cwd = path.join('fixture', 'app');
const babelrcPath = path.resolve('fixture', '.babelrc');

test('async', async t => {
	const x = await fn({cwd});
	t.is(x.path, babelrcPath);
	t.deepEqual(x.babel.presets, ['es2015', 'react']);
	t.deepEqual(x.babel.plugins, ['transform-class-properties']);
});

test('sync', t => {
	const x = fn.sync({cwd});
	t.is(x.path, babelrcPath);
	t.deepEqual(x.babel.presets, ['es2015', 'react']);
	t.deepEqual(x.babel.plugins, ['transform-class-properties']);
});
