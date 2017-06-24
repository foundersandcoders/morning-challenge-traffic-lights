// DON'T CHANGE ANYTHING BETWEEN HERE ---
var time = 1000;

var red = blinkLight(get('red'), 'red');
var yellow = blinkLight(get('yellow'), 'yellow');
var green = blinkLight(get('green'), 'green');

var red2 = blinkLight(get('red2'), 'red');
var yellow2 = blinkLight(get('yellow2'), 'yellow');
var green2 = blinkLight(get('green2'), 'green');

function blinkLight(element, colour) {
  return function red(callback) {
    element.classList.add(colour);
    setTimeout(function() {
      element.classList.remove(colour);
      if (callback) {
        callback();
      }
    }, time);
  };
}

function get(id) {
  return document.getElementById(id);
}

// --- AND HERE.
// Your code goes here:
