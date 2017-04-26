# prepend-cwd

> Prepend the CWD to a path

[![Travis](https://img.shields.io/travis/gakimball/prepend-cwd.svg?maxAge=2592000)](https://travis-ci.org/gakimball/prepend-cwd) [![npm](https://img.shields.io/npm/v/prepend-cwd.svg?maxAge=2592000)](https://www.npmjs.com/package/prepend-cwd)

Use this if you need a path to always be absolute, but the input you're getting could be relative or absolute.

## Installation

```bash
npm install prepend-cwd
```

## Usage

```js
const cwd = require('prepend-cwd');

cwd('cat.png'); // => /Users/geoff/sites/project/cat.png
cwd('/Users/geoff/sites/project/cat.png') // => /Users/geoff/sites/project/cat.png
```

## API

### cwd(path)

Prepend the current working directory to a path, unless the path is absolute, in which case return it as-is.

- **path** (String): path to prepend to.

Returns absolute path.

## Local Development

```bash
git clone https://github.com/gakimball/prepend-cwd
cd prepend-cwd
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
