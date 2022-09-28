let a = "text"; // string
let b =
  "The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-two"; // string
let c = true; //boolean
let d = false; // boolean
let f = "42"; // string
let empty_string = ""; //string
let array_numbers = [999, -4.877, NaN, Infinity, -Infinity, -32, 2.45]; // array of numbers
let value_unique_one = undefined;
let value_unique_two = null;
let result_array_numbers_strings_addition = [];
let result_array_numbers_true_addition = [];
let result_array_numbers_false_addition = [];
let result_array_numbers_strings_multiplication = [];
let result_array_numbers_strings_multiplication_f = [];
let result_array_numbers_strings_multiplication_empty_string = [];
let result_array_numbers_true_multiplication = [];
let result_array_numbers_false_multiplication = [];
let result_array_numbers_strings_divide = [];
let result_array_numbers_strings_divide_f = [];
let result_array_numbers_strings_divide_empty_string = [];
let result_array_numbers_true_divide = [];
let result_array_numbers_false_divide = [];
let result_array_numbers_strings_conversion = [];
let result_array_numbers_boolean = [];

// Perform addition of string + number
array_numbers.forEach((element) =>
  result_array_numbers_strings_addition.push(a + element)
);
console.log(result_array_numbers_strings_addition); // ['text999', 'text-4.877', 'textNaN', 'textInfinity', 'text-Infinity', 'text-32', 'text2.45']

// Perform addition of string + boolean
let result1 = a + c;
let result2 = b + d;
console.log(result1, result2); // texttrue The Answer to the Great Question... Of Life, the Universe and Everything... Is... Forty-twofalse

// Perform addition of number + boolean
array_numbers.forEach((element) =>
  result_array_numbers_true_addition.push(element + c)
);
console.log(result_array_numbers_true_addition); // [1000, -3.877, NaN, Infinity, -Infinity, -31, 3.45]

array_numbers.forEach((element) =>
  result_array_numbers_false_addition.push(element + d)
);
console.log(result_array_numbers_false_addition); // [999, -4.877, NaN, Infinity, -Infinity, -32, 2.45]

// Perform multiplication of string * boolean
let result3 = a * c;
let result4 = b * d;
console.log(result3, result4); //NaN

// Perform multiplication of string * number
array_numbers.forEach((element) =>
  result_array_numbers_strings_multiplication.push(a * element)
);
console.log(result_array_numbers_strings_multiplication); // [NaN, NaN, NaN, NaN, NaN, NaN, NaN]

array_numbers.forEach((element) =>
  result_array_numbers_strings_multiplication_f.push(f * element)
);
console.log(result_array_numbers_strings_multiplication_f); // [41958, -204.834, NaN, Infinity, -Infinity, -1344, 102.9]

array_numbers.forEach((element) =>
  result_array_numbers_strings_multiplication_empty_string.push(
    empty_string * element
  )
);
console.log(result_array_numbers_strings_multiplication_empty_string); // [0, -0, NaN, NaN, NaN, -0, 0]

// Perform multiplication of number * boolean
array_numbers.forEach((element) =>
  result_array_numbers_true_multiplication.push(element * c)
);
console.log(result_array_numbers_true_multiplication); // [999, -4.877, NaN, Infinity, -Infinity, -32, 2.45]

array_numbers.forEach((element) =>
  result_array_numbers_false_multiplication.push(element * d)
);
console.log(result_array_numbers_false_multiplication); // [0, -0, NaN, NaN, NaN, -0, 0]

// Divide string / boolean
let result5 = a / c;
let result6 = b / d;
console.log(result5, result6);  //NaN

// Divide string / number
array_numbers.forEach((element) =>
  result_array_numbers_strings_divide.push(a / element)
);
console.log(result_array_numbers_strings_divide); // [NaN, NaN, NaN, NaN, NaN, NaN, NaN]

array_numbers.forEach((element) =>
  result_array_numbers_strings_divide_f.push(f / element)
);
console.log(result_array_numbers_strings_divide_f); // [0.042042042042042045, -8.611851548082837, NaN, 0, -0, -1.3125, 17.142857142857142]

array_numbers.forEach((element) =>
  result_array_numbers_strings_divide_empty_string.push(empty_string / element)
);
console.log(result_array_numbers_strings_divide_empty_string); // [0, -0, NaN, 0, -0, -0, 0]

// Divide number / Boolean
array_numbers.forEach((element) =>
  result_array_numbers_true_divide.push(element / c)
);
console.log(result_array_numbers_true_divide); // [999, -4.877, NaN, Infinity, -Infinity, -32, 2.45]

array_numbers.forEach((element) =>
  result_array_numbers_false_divide.push(element / d)
);
console.log(result_array_numbers_false_divide); //  [Infinity, -Infinity, NaN, Infinity, -Infinity, -Infinity, Infinity]

// Perform explicit conversion string
let string_c = String(c);
let string_d = String(d);
let string_value_unique_one = String(value_unique_one);
let string_value_unique_two = String(value_unique_two);
console.log(string_c, typeof string_c); // true string
console.log(string_d, typeof string_d); // false string
console.log(string_value_unique_one, typeof string_value_unique_one); // undefined string
console.log(string_value_unique_two, typeof string_value_unique_two); // null string

array_numbers.forEach((element) =>
  result_array_numbers_strings_conversion.push(String(element))
);
console.log(result_array_numbers_strings_conversion); // ['999', '-4.877', 'NaN', 'Infinity', '-Infinity', '-32', '2.45']

// Perform explicit conversion number
let number_c = Number(c);
let number_d = Number(d);
let number_a = Number(a);
let number_b = Number(b);
let number_f = Number(f);
let number_empty_string = Number(empty_string);
let number_value_unique_one = Number(value_unique_one);
let number_value_unique_two = Number(value_unique_two);
console.log(number_c, typeof number_c); // 1 number
console.log(number_d, typeof number_d); // 0 number
console.log(number_a, typeof number_a); // NaN number
console.log(number_b, typeof number_b); // NaN number
console.log(number_f, typeof number_f); // 42 number
console.log(number_empty_string, typeof number_empty_string); // 0 number
console.log(number_value_unique_one, typeof number_value_unique_one); // NaN number
console.log(number_value_unique_two, typeof number_value_unique_two); // 0 number

// Perform explicit conversion boolean
let boolean_a = Boolean(a);
let boolean_b = Boolean(b);
let boolean_f = Boolean(f);
let boolean_empty_string = Boolean(empty_string);
let boolean_value_unique_one = Boolean(value_unique_one);
let boolean_value_unique_two = Boolean(value_unique_two);
console.log(boolean_a, typeof boolean_a); // true boolean
console.log(boolean_b, typeof boolean_b); // true boolean
console.log(boolean_f, typeof boolean_f); // true boolean
console.log(boolean_empty_string, typeof boolean_empty_string); // false boolean
console.log(boolean_value_unique_one, typeof boolean_value_unique_one); // false boolean
console.log(boolean_value_unique_two, typeof boolean_value_unique_two); // false boolean

array_numbers.forEach((element) =>
  result_array_numbers_boolean.push(Boolean(element))
);
console.log(result_array_numbers_boolean); // [true, true, false, true, true, true, true]