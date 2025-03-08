function getDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffDays = Math.round(Math.abs((new Date(date2) - new Date(date1)) / oneDay));
  return diffDays;
}

console.log(getDaysBetweenDates("2024-03-19", "2024-03-21")); // Output: 2
