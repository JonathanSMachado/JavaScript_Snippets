const decaptalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')

console.log(decaptalize('FooBar'))