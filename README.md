# bablyfill

run your es6+ node code without any installs but bablyfill

## Install

#### local

```bash
npm install [--save[-dev]] bablyfill
```

```bash
yarn add bablyfill
```

#### global

```bash
npm i -g bablyfill
```

```bash
yarn global add bablyfill
```

## Usage

### CLI

bablyfill installs 4 binaries that are only aliases for each other.
you can use each following shell command to start the magic:

```bash
bablyfill
devnode
es6ify
es6
```

### run es6 code

to run es6+ code you can simply call:

```bash
es6 path/to/es6-app.js
```

#### transpile to stdout

```bash
es6 path/to/es6-app.js -t
```

#### transpile and save es6 file

```bash
es6 path/to/es6-app.js path/lib/dest.js
```

#### transpile / transform multiple es6 sources using glob or path

```bash
es6 'path/to/es6/**/*.js' path/to/lib/
es6 path/to/es6 path/to/lib/
```
