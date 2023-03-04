function isPhysicalValue (value) {
  const physicalDirections = ['bottom', 'left', 'right', 'top']

  const valueIsPhysical =
        physicalDirections.some(direction => value.includes(direction))

  return valueIsPhysical
}

module.exports = {
  isPhysicalValue
}
