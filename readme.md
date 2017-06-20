# read-babelrc-up
[![Build Status](https://travis-ci.org/akameco/read-babelrc-up.svg?branch=master)](https://travis-ci.org/akameco/read-babelrc-up)

> Read the closet .babelrc or .babelrc.js or babel in package.json.


## Install

```
$ npm install --save read-babelrc-up
```


## Usage

```js
const readBabelrcUp = require('read-babelrc-up');

readBabelrcUp().then(result => {
  console.log(result);
  /*
  {
    babel:
     { presets: [ 'es2015', 'react' ],
      plugins: [ 'transform-class-properties' ] },
    path: '/Users/akameco/src/my-babel-app/.babelrc'
  }
  */
});
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

- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories

## License

MIT © [akameco](http://akameco.github.io)
