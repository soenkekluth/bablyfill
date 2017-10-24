# bablyfill
run your es6+ node code without any installs but bablyfill 

## install

```shell
npm install [--save[-dev]] bablyfill
```
```shell
yarn add bablyfill
```

## CLI
```shell
bablyfill path/to/es6.js
```

## Module
```javascript
  
require('bablyfill')();
require('./es6-app');

```


## Options

bablyfill looks for a .babelrc file in the root of your project and uses it for initialization.
execute only once at the top of your projects main.js
more options can also be defined:

```javascript
  
var bablyfill = require('bablyfill');

// just run (and use .babelrc from root)
bablyfill();

// or with options:
bablyfill({
  ignore : /node_modules\/(?!es6-module)/
});

// or with path to .babelrc:
bablyfill(null, path.resolve('../.babelrc'));
  
  
// require your es6 code:
require('./es6-app');

```

## Usage example: (easiest)
- create a file [sript.js] containing:
```javascript
var bablyfill = require('bablyfill');
bablyfill();

// require your es6 code:
require('./es6-app');
  
```
- run
```
node ./sript
```


## example:

```
  npm install && npm run example

```
