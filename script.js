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

function runBoth(func1, func2) {
  return function(callback) {
    func1();
    func2(callback);
  };
}

function callAllInOrder(tasks, callback) {
  var callNext = function() {
    if (n + 1 === tasks.length) {
      tasks[n](callback);
    } else {
      tasks[n](callNext);
    }
    n += 1;
  };
  var n = 0;
  callNext();
}

function light(callback) {
  var redAndYellow = runBoth(red, yellow);
  var order = [green, green, yellow, red, red, red, red, redAndYellow];
  callAllInOrder(order, function() {
    callback(callback);
  });
}

function light2(callback) {
  var redAndYellow = runBoth(red2, yellow2);
  var order2 = [red2, red2, red2, redAndYellow, green2, green2, yellow2, red2];
  callAllInOrder(order2, function() {
    callback(callback);
  });
}

light(light);
light2(light2);
