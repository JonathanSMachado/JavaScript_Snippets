const all = (arr, fn = Boolean) => arr.every(fn)

console.log(all([4,3,2], x => x >= 1))