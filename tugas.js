Mencari luas persegi panjang:
function findRectangleArea(length, width) {
  return length * width;
}

console.log(findRectangleArea(5, 3)); // Output: 15

Mencari diameter, keliling, dan luas lingkaran:
function findCircleMeasures(radius) {
  const diameter = 2 * radius;
  const circumference = Math.PI * diameter;
  const area = Math.PI * radius ** 2;
  return { diameter, circumference, area };
}

console.log(findCircleMeasures(5)); 
// Output: { diameter: 10, circumference: 31.4159, area: 78.539 }

Mencari sudut segitiga jika diberikan dua sudut:
function findTriangleAngle(a, b) {
  return 180 - a - b;
}

console.log(findTriangleAngle(80, 65)); // Output: 35

Menghitung selisih hari antara dua tanggal:
function getDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffDays = Math.round(Math.abs((new Date(date2) - new Date(date1)) / oneDay));
  return diffDays;
}

console.log(getDaysBetweenDates("2024-03-19", "2024-03-21")); // Output: 2

Mencetak inisial nama dalam huruf besar:
function printNameInitial(name) {
  const names = name.split(" ");
  let initial = "";
  for (let i = 0; i < names.length; i++) {
    initial += names[i][0].toUpperCase();
  }
  return initial;
}

console.log(printNameInitial("John Doe")); // Output: JD


