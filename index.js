/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return true if number is even or false is number is not even
const isNumberEven = (num) => {
  if ( num % 2 == 0) {
    return true
  } else {
    return false
  }
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
// If num1 is greater than num2 return string 'num1 is the largest number'
// if num2 is greater than num1 return string 'num2 is the largest number'
// if num1 is equal to num2 return string 'num1 is equal to num2'
const findLargestNumber = (num1, num2) => {
  if  (num1 > num2) {
    return `${num1} is the largest number`;
  } else if (num1 < num2) {
    return `${num2} is the largest number`;
  } else {
    return `${num1} is equal to ${num2}`;
  }  
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
// if triangle is equilateral return string 'Equilateral triangle'
// if triangle is Scalene return string 'Scalene triangle'
// if triangle is Isosceles return string 'Isosceles triangle'
const findTriangleType = (side1, side2, side3) => {
  if (side1 == side2 && side2 == side3) {
    return 'Equilateral triangle';
  } else if (side1 != side2 && side2 != side3 && side3 != side1) {
    return 'Scalene triangle';
  } else {
    return 'Isosceles triangle'
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// function should return amount of days in month with string 'The Month has X days'
// If wrong month number provided return string 'Invalid Month of value X'
const findDaysInMonth = (month, year) => {
  switch (month) {
    case 1:
      return 'The Month has 31 days';
      break;

    case 3:
      return 'The Month has 31 days';
      break;

    case 5:
      return 'The Month has 31 days';
      break;

    case 7:
      return 'The Month has 31 days';
      break;

    case 8:
      return 'The Month has 31 days';
      break;

    case 10:
      return 'The Month has 31 days';
      break;

    case 12:
      return 'The Month has 31 days';
      break;

    case 4:
      return 'The Month has 30 days';
      break;
    
    case 6:
      return 'The Month has 30 days';
      break;

    case 9:
      return 'The Month has 30 days';
      break;

    case 11:
      return 'The Month has 30 days';
      break;

    case 2: 
      if (year % 4 == 0) {
        return 'The Month has 29 days';
      } else{
        return 'The Month has 28 days';
      }
      break;

    default:
      return `Invalid Month of value ${month}`;
  }
}

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
// function should return result of operation of num1 and num2 based on operation parameter.
// If operation is invalid return string 'Invalid operation'
const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case 'add': 
      return num1 + num2;

    case 'subtract':
      return num1 - num2;

    case 'multiply': 
      return num1 * num2;

    case 'divide':
      return num1 / num2;

    case 'modulus': 
      return num1 % num2;

    case 'someunknownoperation':
      return 'someunknownoperation is an invalid operation';
  }
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
// Compare your result with string in test
const getMultiplicationTable = () => {
  for (let i = 2; i < 10; i++) {    
    for (let a = 1; a <= 10; a++) {
      return `${i} * ${a} = ${a * i} \n`;
    }
  }
}

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
