# bablyfill
"polyfill" to run esnext code in node

execute only once at the top of your projects main.js

bablyfill looks for a .babelrc file in the root of your project and uses it for initialization.
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



## example:

```
  npm install && npm run example

```
