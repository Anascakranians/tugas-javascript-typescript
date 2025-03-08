function findCircleMeasures(radius) {
  const diameter = 2 * radius;
  const circumference = Math.PI * diameter;
  const area = Math.PI * radius ** 2;
  return { diameter, circumference, area };
}

console.log(findCircleMeasures(5)); 
// Output: { diameter: 10, circumference: 31.4159, area: 78.539 }
