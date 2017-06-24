# Spoilers ahead

Calling a series of functions with callbacks (to show red, then yellow, then green):
```js
red(function() {
  yellow(function(){
    green()
  })
})
```

The same as above but show yellow and red at the same time in the middle:
```js
red(function() {
  red();
  yellow(function(){
    green()
  })
})
```

Or alternatively to neaten things you could chuck red and yellow together in a function:
```js
// make a function with a callback
function redAndYellow(callback) {
  red()
  yellow(callback)
}

red(function() {
  redAndYellow(green);
});
```
