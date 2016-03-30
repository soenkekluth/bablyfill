# bablyfill
"polyfill" to run esnext code in node

bablyfill looks for a .babelrc file in the root of your project and uses it for initialization.
more options can also be defined:

```javascript
  
  var bablyfill = require('bablyfill');

  // just run (and use .babelrc from root)
  bablyfill();

  // with options:
  bablyfill({
    ignore : /node_modules\/(?!es6-module)/
  });

  // with path to .babelrc:
  bablyfill(null, path.resolve('../.babelrc'));


```
