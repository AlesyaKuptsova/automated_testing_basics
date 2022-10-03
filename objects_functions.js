//   Create a car object, add a color property to it with the value equals 'black'
const car = {};
car.color = "black";
console.log(car);

// Change the color property of the car object to 'green'
car.color = "green";
console.log(car);

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function () {
  return 42;
};
console.log(car.power());

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const sumFruits = function (apple, pear) {
  return apple + pear;
};
console.log(`all fruits: ${sumFruits(5, 10)}`);

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
function checkName(name) {
  if (name === "Alesia") {
    return `Hello ${name}`;
  }
  return "Sorry, there is no such name";
}
console.log(checkName("Lord Vetinari"));
console.log(checkName("Alesia"));

// Write a function for calculating the type of argument and type output to the console
const calcType = function (argument) {
  console.log(`type of argument: ${typeof argument}`);
};
calcType([]);

// Write a function that determines whether a number is prime or not
function checkNumberisPrime(number) {
  if (number < 0 || typeof number !== "number") {
    return `Sorry, ${number} is invalid value`;
  }
  if (number <=1) {
    return `${number} is a not prime number`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return `${number} is a not prime number`;
    }
  }
  return `${number} is a prime number`;
}


for (let i=0; i<=20; i++){
  console.log(checkNumberisPrime(i));
}
