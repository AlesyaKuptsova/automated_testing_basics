// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'
try {
  console.log(a);
  let a = 3;
} catch {
  console.log("let must be declared before use");
}

try {
  let valid = Number.isFinite(1 / 0);
  if (!valid) {
    throw new SyntaxError("cannot be divided by zero");
  }
  console.log(valid);
} catch (err) {
  console.log(err.message);
}
