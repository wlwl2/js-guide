# JavaScript Variables

`var` is function scoped and `let` is block scoped.

```js
console.log(test1)
var test1 = 0
console.log(test1)
// returns:
// undefined
// 0

console.log(test2)
let test2 = 0
console.log(test2)
// returns:
// ReferenceError: Cannot access 'test2' before initialization
// in Google Chrome Browser.
// returns:
// ReferenceError: test2 is not defined
// in CLI
```
