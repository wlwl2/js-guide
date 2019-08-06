function exampleVarFunction () {
    let exampleVar = 'test'

    function innerVarFunction () {
      console.log(exampleVar)
    }

    innerVarFunction()
}

exampleVarFunction()

// console.log(exampleVar)  // Causes error
