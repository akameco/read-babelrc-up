# read-babelrc-up

[![Build Status](https://travis-ci.org/akameco/read-babelrc-up.svg?branch=master)](https://travis-ci.org/akameco/read-babelrc-up)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Read the closet .babelrc or .babelrc.js or babel in package.json.

## Install

```
$ npm install --save read-babelrc-up
```

## Usage

```js
const readBabelrcUp = require('read-babelrc-up')

readBabelrcUp().then(result => {
  console.log(result)
  /*
  {
    babel:
     { presets: [ 'es2015', 'react' ],
      plugins: [ 'transform-class-properties' ] },
    path: '/Users/akameco/src/my-babel-app/.babelrc'
  }
  */
})
```

## API

### readBabelrcUp([options])

Returns a `Promise` for the result object.

### readBabelrcUp.sync([options])

Return the result object.

#### options

##### cwd

Type: `string`<br>
Default: `.`

Directory to start looking for .babelrc file.

## Related

* [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/read-babelrc-up/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/read-babelrc-up/commits?author=akameco" title="Documentation">📖</a> <a href="https://github.com/akameco/read-babelrc-up/commits?author=akameco" title="Tests">⚠️</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
