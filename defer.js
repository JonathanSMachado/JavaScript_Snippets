const defer = (fn, ...args) => setTimeout(fn, 1, ...args)

defer(console.log, 'a', 'b')
console.log('c')