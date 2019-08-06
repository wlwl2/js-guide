# Scope and Closure

From:
https://developer.mozilla.org/en-US/docs/Glossary/Scope

A function serves as a closure in JavaScript, and thus creates a scope, so that
(for example) a variable defined exclusively within the function cannot be
accessed from outside the function or within other functions.

```js
function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log(x);
}

console.log(x);  // Causes error
```
