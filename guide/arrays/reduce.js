const numberGroupToBeReduced = [2, 4, 6, 8]

const reducer = (accumulator, currentValue) => accumulator + currentValue

const numberGroupReduced = numberGroupToBeReduced.reduce(reducer)

console.log(numberGroupReduced) // logs: 20
