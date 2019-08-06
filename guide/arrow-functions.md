# Arrow Functions

An example JavaScript function:

```js
function addOneTo (exampleNumber) {
  return exampleNumber + 1
}

console.log(addOneTo(1)) // logs 2
```

The same function written as an arrow function:

```js
const addOneTo = exampleNumber => exampleNumber + 1

console.log(addOneTo(1)) // logs 2
```

With arrow functions, this is taken from its surroundings. A new this is not
created within an arrow function unlike regular functions.
