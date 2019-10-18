const castToArray = val => (Array.isArray(val) ? val : [val])

console.log(castToArray('foo'))