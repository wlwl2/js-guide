# Array.prototype.reduce()

Executes a reducer function on each element of the array,
resulting in a single output value.

```js
const numberGroupToBeReduced = [2, 4, 6, 8]

const numberGroupReduced = numberGroupToBeReduced.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(numberGroupReduced) // logs: 20
```
