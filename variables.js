let stringValue = "text";
let booleanValue = true;
let numberValue = 42;

// Perform addition of string + number
let result1 = stringValue + numberValue;
console.log(result1);

// Perform addition of string + boolean
let result2 = stringValue + booleanValue;
console.log(result2);

// Perform addition of number + boolean
let result3 = numberValue + booleanValue;
console.log(result3);

// Perform multiplication of string * boolean
let result4 = stringValue * booleanValue;
console.log(result4);

// Perform multiplication of string * number
let result5 = stringValue * numberValue;
console.log(result5);

// Perform multiplication of number * boolean
let result6 = numberValue * booleanValue;
console.log(result6);

// Divide string / boolean
let result7 = stringValue / booleanValue;
console.log(result7);

// Divide string / number
let result8 = stringValue / numberValue;
console.log(result8);

// Divide number / Boolean
let result9 = numberValue / booleanValue;
console.log(result9);

// Perform explicit conversion string
let stringBooleanValue = String(booleanValue);
let stringNumberValue = String(numberValue);
console.log(stringBooleanValue, typeof stringBooleanValue);
console.log(stringNumberValue, typeof stringNumberValue);

// Perform explicit conversion number
let numberStringValue = Number(stringValue);
let numberBooleanValue = Number(booleanValue);
console.log(numberStringValue, typeof numberStringValue);
console.log(numberBooleanValue, typeof numberBooleanValue);

// Perform explicit conversion boolean
let booleanStringValue = Boolean(stringValue);
let booleanNumberValue = Boolean(numberValue);
console.log(booleanStringValue, typeof booleanStringValue);
console.log(booleanNumberValue, typeof booleanNumberValue);