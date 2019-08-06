# JavaScript Variables

`var` is function scoped (closure).
`let` and `const` are block scoped.

```js
function exampleLetFunction () {
  let exampleLet = 1

  if (true) {
    let exampleLet = 2
    console.log(exampleLet) // logs 2
  }

  console.log(exampleLet) // logs 1
}
exampleLetFunction()
```

```js
function exampleVarFunction () {
  var exampleVar = 1

  if (true) {
    var exampleVar = 2
    console.log(exampleVar) // logs 2
  }

  console.log(exampleVar) // logs 2 (isn't affected by block scope)
}
exampleVarFunction()
```

Some other differences:

```js
console.log(testVar)

var testVar = 0

console.log(testVar)

// logs:
// undefined
// 0
```

```js
console.log(testLet)

let testLet = 0

console.log(testLet)

// logs:
// ReferenceError: Cannot access 'testLet' before initialization
// in Google Chrome Browser.
// logs:
// ReferenceError: testLet is not defined
// in CLI
```
