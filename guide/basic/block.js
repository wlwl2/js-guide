var blockVar = 1
{
  var blockVar = 2
}
console.log(blockVar) // logs 2

let blockLet = 1
{
  let blockLet = 2
}
console.log(blockLet) // logs 1

const blockConst = 1
{
  const blockConst = 2
}
console.log(blockConst) // logs 1
