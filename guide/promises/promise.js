let promiseExample = new Promise(function (resolve, reject) {
  setTimeout(function() {resolve('Future Result')}, 2000)
})

promiseExample.then(function (value) {console.log(value)})

console.log(promiseExample)
