window.addEventListener('DOMContentLoaded', () => {

  const submit = document.querySelector('.submit')
  const x = document.querySelector('.xcoord')
  const y = document.querySelector('.ycoord')
  const xrobot = document.querySelector('.xcoord-robot')
  const yrobot = document.querySelector('.ycoord-robot')
  const compass = document.querySelector('.compass')
  const movement = document.querySelector('.movement')
  const output = document.querySelector('.output')
  const compassDirection = document.querySelector('.compass-direction')


  function handleSubmit(e) {
    e.preventDefault()
    // Grid coords and robot starting coords
    const coords = [Number(x.value), Number(y.value)]
    const robotCoords = [Number(xrobot.value), Number(yrobot.value)]

    // Right, Forward, Left 
    const robotMovement = movement.value

    // Starting Direction
    const direction = compass.value
    const facing = { N: 0, E: 1, S: 2, W: 3 }
    let startingDirection = facing[direction]

    // LOST ARRAY
    let lostArray = []

    // HANDLING ROBOT MOVEMENT
    const moving = robotMovement.split('').map(elem => {
      if (elem === 'L') {
        startingDirection === 0 ? startingDirection = 3 : startingDirection--
        return startingDirection
      } else if (elem === 'R') {
        startingDirection === 3 ? startingDirection = 0 : startingDirection++
        return startingDirection
      } else if (elem === 'F') {
        if (startingDirection === 0) {
          robotCoords[1]++
          if (robotCoords[1] > coords[1]) console.log('LOST')
          if (lostArray.filter(elem => elem === robotCoords) === [robotCoords]) robotCoords[1]--
        }
        if (startingDirection === 1) robotCoords[0]++
        if (startingDirection === 2) robotCoords[1]--
        if (startingDirection === 3) robotCoords[0]--
        if (robotCoords[1] > coords[1] || robotCoords[0] > coords[0]) {
          const newX = robotCoords[0]
          const newY = robotCoords[1]
          lostArray.push([newX, newY])
        }
        return robotCoords
      }
    })
    lostArray.push(robotCoords)
    console.log(lostArray)

    const compassLetter = Object.keys(facing)[startingDirection]
    robotCoords.push(compassLetter)

    return compassDirection.innerHTML = lostArray
  }

  submit.addEventListener('click', handleSubmit)


})

