# MARS ROVER CODING CHALLENGE

## Approach
I decided to do the challenge in vanilla JS. First of all I found HTML elements in the DOM and then carried out the functionality. The code for moving F was probably the hardest part.

## Challenges
* I struggled to get the LOST element showing in the page but succeeded getting it in the console. If I had had more time I hopefully would have achieved this.
* The hardest part was probably getting the direction of the robot
```
  const direction = compass.value
    const facing = { N: 0, E: 1, S: 2, W: 3 }
    let startingDirection = facing[direction]
```
* The time limit

## Wins 
* I was really pleased with the code below which, if the robot starts facing North and moves L it faces W
```
        startingDirection === 0 ? startingDirection = 3 : startingDirection--
```
