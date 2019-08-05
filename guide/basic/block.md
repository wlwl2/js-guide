# Block Statements

Code within curly brackets (`{ }`) are block statements.

It allows you to use multiple statements where JavaScript expects only one statement.

Blocks are commonly used in association with if and for statements.

## var keyword

```js
var a = 1
{
  var a = 2
}
console.log(a) // logs 2
```

## let keyword

```js
let b = 1
{
  let b = 2
}
console.log(b) // logs 1
```

## const keyword

```js
const c = 1
{
  const c = 2
}
console.log(c) // logs 1 and does not throw SyntaxError...
```
