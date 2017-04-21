'use strict';
const findUp = require('find-up');
const loadJsonFile = require('load-json-file');

module.exports = opts => {
	return findUp('.babelrc', opts).then(fp => {
		if (!fp) {
			return {};
		}

		return loadJsonFile(fp).then(babel => ({babel, path: fp}));
	});
};

module.exports.sync = opts => {
	const fp = findUp.sync('.babelrc', opts);

	if (!fp) {
		return {};
	}

	return {
		babel: loadJsonFile.sync(fp, opts),
		path: fp
	};
};
