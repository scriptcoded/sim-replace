const simReplace = require('../index')

let text = 'A cow ate a cat'

let result = simReplace(text, [
  [/cowzer/, 'cat'],
  [/cat/, 'cow']
])

console.log(result)
