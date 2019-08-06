# Block Statements

Code within curly brackets (`{ }`) are block statements.

It allows you to use multiple statements where JavaScript expects only one statement.

Blocks are commonly used in association with if and for statements.

## var keyword

```js
var blockVar = 1
{
  var blockVar = 2
}
console.log(blockVar) // logs 2
```

## let keyword

```js
let blockLet = 1
{
  let blockLet = 2
}
console.log(blockLet) // logs 1
```

## const keyword

```js
const blockConst = 1
{
  const blockConst = 2
}
console.log(blockConst) // logs 1
```
