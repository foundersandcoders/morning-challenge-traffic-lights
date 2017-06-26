**Author**: [@finnhodgkin](https://github.com/finnhodgkin)

**Maintainer**: [@finnhodgkin](https://github.com/finnhodgkin)  

# Traffic light callback challenge:vertical_traffic_light:

![traffic light gif](https://user-images.githubusercontent.com/22300773/27510355-77a53678-5906-11e7-8215-845f9c987e09.gif)

## Setup

1. Clone the repo

```
$ git clone https://github.com/founderrsandcoders/morning-challenge-traffic-lights.git
```

2. Open the folder in your favourite text editor.

## Your task

Your task is to replicate the traffic lights shown above. The only file you'll
need to edit is `script.js`. Hopefully the instructional comments will speak for
themselves.

If you get stuck check out [hint.md](./hint.md).

### Part 1:

Light up the first traffic light in the following order:

+ :green_apple: green
+ :sun_with_face: yellow
+ :red_circle: red
+ :red_circle::sun_with_face: red & yellow
+ :green_apple: green

### Part 2:

Display the red light for longer:

+ :green_apple: green
+ :sun_with_face: yellow
+ :red_circle: red (3 seconds)
+ :red_circle::sun_with_face: red & yellow
+ :green_apple: green

### Part 3:

Loop the light so it plays forever.

> Hint: recursion worked for me...

### Part 4:

Loop the second light with the following rules:

+ Green should show only when the other light is red.
+ When transitioning from green to red, show yellow.
+ If the other light is green or yellow, show red.
+ When transitioning from red to green show yellow and red simultaneously.

:vertical_traffic_light: If successful you should see something like the
gif above. :tada:

### Solutions:

Check out the two solution branches (solution and solution-fun) for two complete examples
