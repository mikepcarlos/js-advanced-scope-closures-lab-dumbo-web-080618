function produceDrivingRange(range) {
  return function(start, end) {
    let startBlock = parseInt(start)
    let endBlock = parseInt(end)
    let distance = Math.abs(endBlock - startBlock)
    let diff = range - distance
    // debugger
    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return (fare * tip)
  }
}

function createDriver() {
  let driverId = 0
  return function Driver(name) {
    this.name = name
    this.id = driverId++
  }
  return driverId
}
