# sim-replace
> A small utility to execute multiple replaces simultaneously

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

## About
sim-replace, or Simultaneous Replace, is a small utilty that will execute mutliple regex replaces simultaneously.

## Installation

Install via Yarn (recommended):
```bash
yarn add sim-replace -D
```
Install via NPM:
```bash
npm install sim-replace --save-dev
```

## Usage
Note that we're using ES6 import statements here. Usage with `require` works just as well.


```javascript
import simReplace from 'sim-replace'

let text = 'There was a cow and a cat'

let result = simReplace(text, [
  [/cow/g, 'cat'],
  [/cat/g, 'cow']
])

result === 'There was a cat and a cow' // true
```

It also supports capturing group placeholders

```javascript
import simReplace from 'sim-replace'

let text = 'This is my sister'

let result = simReplace(text, [
  [/(my sister)/g, 'Fanny, $1']
])

result === 'This is Fanny, my sister' // true
```

## Known issues
- Regex with multiple matches doesn't work.

## Contributing

1. Fork it (<https://github.com/scriptcoded/sim-replace/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Additional information

Malcolm Nihlén - malcolm.nihlen@gmail.com

Distributed under the MIT licence. See `LICENCE` for more information.

https://github.com/scriptcoded

[npm-image]: https://img.shields.io/npm/v/sim-replace.svg
[npm-url]: https://npmjs.org/package/sim-replace
[npm-downloads]: https://img.shields.io/npm/dm/sim-replace.svg
