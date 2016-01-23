# BABEL 6 ASYNC-AWAIT PROBLEM

Babel 6 has a problem with async await when execute transpiled codes to the Internet Explorer 8.
You can check the problem with this project.

## What is the problem?

With Babel 5.x, this worked well with IE8 (check the babel5 branch). But in Babel 6, this occur `Unhandled promise rejection`. So I've debugged this with the developer mode of IE8(omg...) and I've seen that the `step` function related with `regenerator` work differently with another browser like Chrome. It execute `gen[key](arg)`. In Chrome, `gen` is extended `GeneratorFunction` and it has `next` function. But in IE8, `gen` is the async function that has to execute and it doesn't have `next`. I think it seems to be the cause by scope problem. In IE8, `this` of `ref.apply(this, arguments)` that contained in transpiled code is `window`, but in the Chrome, it is `undefined`. I'm not sure but it occurred by `babel-polyfill` or `babel-runtime` maybe.

## How to run this

```bash
npm install
npm start
open http://localhost:3000
```