function printNameInitial(name) {
  const names = name.split(" ");
  let initial = "";
  for (let i = 0; i < names.length; i++) {
    initial += names[i][0].toUpperCase();
  }
  return initial;
}

console.log(printNameInitial("John Doe")); // Output: JD
