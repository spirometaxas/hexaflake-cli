# hexaflake-cli
Print the Hexaflake fractal to the console!

## Usage
### Via `npx`:
```
$ npx hexaflake-cli <n>
$ npx hexaflake-cli <n> <size>
```

### Via Global Install
```
$ npm install --global hexaflake-cli
$ hexaflake-cli <n>
$ hexaflake-cli <n> <size>
```

### Via Import
```
$ npm install hexaflake-cli
```
then:
```
const hexaflake = require('hexaflake-cli');
console.log(hexaflake.create(<n>, <size>));
```