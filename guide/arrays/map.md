# Array.prototype.map()

Creates a new array with the results of calling a provided function on
every element in the calling array.

```js
var numberGroupToBeMapped = [1, 2, 4, 8]

const numberGroupMapped = numberGroupToBeMapped.map(x => x * 4)

console.log(numberGroupMapped) // logs: Array [4, 8, 16, 32]
```
