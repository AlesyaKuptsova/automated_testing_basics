// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let sentenceOne = "ahb acb aeb aeeb adcb axeb";
let resultOne = sentenceOne.match(/a.b/gi);
console.log(resultOne);

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let sentenceTwo = "2 + 3 223 2223";
let resultTwo = sentenceTwo.match(/2\s\+\s3/gi);
console.log(resultTwo);

// Get the day, month and year of the current date and output it to the console separately
let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
console.log(`day:${day} month:${month} year:${year}`);
