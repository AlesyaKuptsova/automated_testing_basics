// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const filmsArray = [
  "Elvira: Mistress of the Dark",
  "Beetlejuice",
  "Hocus Pocus",
  "The Ultimate Hitchhiker's Guide",
  "The Addams Family",
];
for (let film of filmsArray) {
  console.log(film);
}
console.log('');

// Given an array of car manufacturers, convert the array to a string and back to an array
const carManufacturersArray = [
  "Toyota Motor Corp. (TM)",
  "Volkswagen AG (VWAGY)",
  "Daimler AG (DMLRY)",
  "Ford Motor Co. (F)",
  "Honda Motor Co. Ltd. (HMC)",
];
let cars = carManufacturersArray.join(",");
console.log(cars);
let newCarManufacturersArray = cars.split(",");
console.log(newCarManufacturersArray);
console.log('');

// Given an array of the names of your friends, add the words hello to each element of the array
const namesFriends = ["Alesia", "Volha", "Dzima", "Ivan", "Vikrotya"];
const newNamesFriends = namesFriends.map((name) => `Hello ${name}`);
console.log(newNamesFriends);
console.log('');

// Convert numeric array to Boolean
const numericArray = [1, 0, 42, -42, 4.2];
const booleanNumericArray = numericArray.map((number) => Boolean(number));
console.log(booleanNumericArray);
console.log('');

// Sort the array [1,6,7,8,3,4,5,6] in descending order
const array = [1, 6, 7, 8, 3, 4, 5, 6];
array.sort((a, b) => b - a);
console.log(array);
console.log('');

// Filter array [1,6,7,8,3,4,5,6] by value> 3
const arr = [1, 6, 7, 8, 3, 4, 5, 6];
const filterArr = arr.filter((number) => number > 3);
console.log(filterArr);
console.log('');

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function outputIndex(arrayValue, numberValue) {
  return arrayValue.indexOf(numberValue);
}
console.log(outputIndex([1, 2, 2, 3, 4, 5], 1));
console.log('');

// Implement a loop that will print the number 'a' until it is less than 10
for (let a = 0; a < 10; a++) {
  console.log(a);
}
console.log('');

// Implement a loop that prints prime numbers to the console
let n = 30;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
console.log('');

// Implement a loop that prints odd numbers to the console
let num = 42;
for (let i = 0; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}