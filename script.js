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
// Replace the example code below with your own solution:

function light(callback) {
  green(function() {
    green(function() {
      yellow(function() {
        red(function() {
          red(function() {
            red(function() {
              red(function() {
                red();
                yellow(function() {
                  callback(callback);
                });
              });
            });
          });
        });
      });
    });
  });
}
light(light);

function light2(callback) {
  red2(function() {
    red2(function() {
      red2(function() {
        yellow2();
        red2(function() {
          green2(function() {
            green2(function() {
              yellow2(function() {
                red2(function() {
                  callback(callback);
                });
              });
            });
          });
        });
      });
    });
  });
}
light2(light2);
