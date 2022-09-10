# hexaflake-cli
Print the [Hexaflake](https://en.wikipedia.org/wiki/N-flake#Hexaflake) fractal to the console!

![What hexaflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/hexaflake-cli/main/img/hexaflake-3-banner.png)

Why the console?  Because it's the *cool* way.  [See All Fractals](https://spirometaxas.com/projects/fractals-cli)

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
console.log(hexaflake.create(<n>, { size: <number>, character: <character> }));
```
The config params are optional.

## Options
### Recursive Step  
```
$ hexaflake-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ hexaflake-cli 2
```
![What hexaflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/hexaflake-cli/main/img/hexaflake-2.png)

```
$ hexaflake-cli 3
```
![What hexaflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/hexaflake-cli/main/img/hexaflake-3.png)

### Size
```
$ hexaflake-cli <n> <size>
```
The optional `<size>` param allows the Hexaflake to be drawn at larger sizes.  `<size>` should be an integer greater than or equal to `<n>`.  Including size will draw a Hexaflake of `<n>` recursive steps the size of a hexagon with `<size>` recursive steps.  

#### Example:
```
$ hexaflake-cli 2 3
```
![What hexaflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/hexaflake-cli/main/img/hexaflake-2-3.png)

### Custom Characters
```
$ hexaflake-cli <n> <size> --character=<character>
```
The optional `--character=<character>` param will draw hexagons using the provided character.  (Please provide only 1 character)  

#### Example:
```
$ hexaflake-cli 1 3 --character=*
```
![What hexaflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/hexaflake-cli/main/img/hexaflake-1-3-character.png)

## Related

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console


#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-island-cli](https://www.npmjs.com/package/minkowski-island-cli) - Print the Minkowski Island to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console


#### Space Filling Curves
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/hexaflake-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)