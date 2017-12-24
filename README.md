# bablyfill
run your es6+ node code without any installs but bablyfill 

## install locally

```shell
npm install [--save[-dev]] bablyfill
```
```shell
yarn add bablyfill
```

## install global

```shell
npm i -g bablyfill
```
```shell
yarn global add bablyfill
```


## CLI
bablyfill installs 4 binaries that are only aliases for each other.
you can use each following shell command to start the magic:
```shell
bablyfill
devnode
es6ify
es6
```
### run es6 code
to run es6+ code you can simply call: 
```shell
es6 path/to/es6-app.js
```
### transpile an es6 script instantly
```shell
es6 t path/to/es6-app.js path/lib/dest.js
```

### transpile / transform es6 code inside a folder recursive and instantly
```shell
es6 t path/to/es6 path/to/lib/
```

