const filterNonUnique = arr => [ ...new Set(arr)]

console.log(filterNonUnique([1,2,2,3,4,5,6,6,7]))