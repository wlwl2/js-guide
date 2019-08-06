# JavaScript Variables

`var` is function scoped and `let` is block scoped.

```js
console.log(testVar)
var testVar = 0
console.log(testVar)
// returns:
// undefined
// 0

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
