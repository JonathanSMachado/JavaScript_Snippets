const allEqual = arr => arr.every(val => val === arr[0])

console.log(allEqual([1,2,3]))

console.log(allEqual([1,1,1]))