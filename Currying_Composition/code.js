/* 
1)
Implement the body of the function below to use the 3 arguments and return a 
string 'It was <suspect> with the <weapon> in the <room>.'

Example: 
const result = solveTheMurder('Professor Plum', 'Revolver', 'Billiard Room');
// result = 'It was Professor Plum with the Revolver in the Billiard Room.'
*/
let solveTheMurder = (suspect, weapon, room) => {
  // YOUR CODE HERE
  return `It was ${suspect} with the ${weapon} in the ${room}.`;
};


/*
2) 
'R.curry' is a function supplied by the Ramda.js library that will return a 
curryable version of any supplied function.

Example:
const sumOfThreeNums = (val1, val2, val3) => val1 + val2 + val3;
const sumOfThreeNums_curry = R.curry(sumOfThreeNums);

// Returns a function that expects 2 arguments and adds them to 5
const sumOfTwoNumsPlus5 = sumOfThreeNums_curry(5);

// result is assigned 5 + 6 + 7
const result = sumOfTwoNumsPlus5(6, 7);
//result = 18 

Using R.curry, create a function 'solveTheMurder_curry' that is a curryable version of 
'solveTheMurder'.
*/

const solveTheMurder_curry = R.curry(solveTheMurder);


/*
The real benefit of currying to invoke a function with less than the expected number of arguments

Using the 'solveTheMurder_curry' from above, write two functions functions: 
'solveWithMrGreen' where 'Mr. Green' is fixed as the suspect in the murder, and
'solveWithMrGreenAndCandlestick where 'Mr. Green' fixed as the murder suspect and the 'Candlestick'
is fixed the murder weapon 
*/

// YOUR CODE HERE
const solveWithMrGreen = solveTheMurder_curry('Mr. Green');

const solveWithMrGreenAndCandlestick = solveTheMurder_curry('Mr. Green', 'Candlestick');

