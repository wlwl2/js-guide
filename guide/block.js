var a = 1
{
  var a = 2
}
console.log(a) // logs 2

let b = 1
{
  let b = 2
}
console.log(b) // logs 1

const c = 1
{
  const c = 2
}
console.log(c) // logs 1 and does not throw SyntaxError...
