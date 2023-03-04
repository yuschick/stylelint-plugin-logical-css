function isPhysicalProperty (property) {
  const physicalDirections = ['bottom', 'left', 'right', 'top']
  const physicalAxes = ['x', 'y']

  const propIsPhysical =
    physicalDirections.some(direction => property.includes(direction)) ||
    physicalAxes.some(direction => property.includes(`-${direction}`))

  return propIsPhysical
}

module.exports = {
  isPhysicalProperty
}
