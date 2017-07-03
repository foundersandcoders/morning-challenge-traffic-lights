// DON'T CHANGE ANYTHING BETWEEN HERE ---
var time = 1000;

var red = blinkLight(get('light-top'), 'red');
var yellow = blinkLight(get('light-middle'), 'yellow');
var green = blinkLight(get('light-bottom'), 'green');

var red2 = blinkLight(get('light-top2'), 'red');
var yellow2 = blinkLight(get('light-middle2'), 'yellow');
var green2 = blinkLight(get('light-bottom2'), 'green');

function blinkLight(element, colour) {
  var blink = function(callback) {
    element.classList.add(colour);
    setTimeout(function() {
      element.classList.remove(colour);
      if (callback) {
        callback();
      }
    }, time);
  };

  return blink;
}

function get(id) {
  return document.getElementById(id);
}

// --- AND HERE.

function callBoth(func1, func2) {
  return function(callback) {
    var n = 0;
    var call = function() {
      n += 1;
      if (n > 1) callback();
    };
    func1(call);
    func2(call);
  };
}
// Calls all the tasks (an array of functions) one after another and then calls
// the callback
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
  var redAndYellow = callBoth(red, yellow);
  var order = [green, green, yellow, red, red, red, red, redAndYellow];
  callAllInOrder(order, function() {
    callback(callback);
  });
}

function light2(callback) {
  var redAndYellow = callBoth(red2, yellow2);
  var order2 = [red2, red2, red2, redAndYellow, green2, green2, yellow2, red2];
  callAllInOrder(order2, function() {
    callback(callback);
  });
}

light(light);
light2(light2);
