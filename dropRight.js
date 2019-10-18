const dropRight = (arr, n = 1) => arr.slice(0, -n)

console.log(dropRight([1,2,3]))
console.log(dropRight([1,2,3], 2))
console.log(dropRight([1,2,3], 1))