'use strict';
/**
 * Multiplication of all the numbers between 1 and the number itself.
 * @param {number} num
 * @returns {number}
 * @returns {number} 
 * @throws {TypeError}type must be a number or bigint num
 * @throws {RangeError}type must be a positive or zero
 */


function factorialisOfNumber(num) {
if (===false 
  (typeof num !== "number" && typeof num !== "bigint" ||  num === null || num === "" || num === " "||isNaN(Number(num)))
) { throw new TypeError();
}
if(num < 0){
  throw new RangeError();
}
if (num === 0) {
  return typeof num === "bigint" ? 1n : 1 ;
}
return num * factorialisOfNumber(num -1);
}

try {
  console.log(factorialisOfNumber('m'));
} catch (error) {
  if(error instanceof TypeError ){
    console.log('Wrong type');
  }
  if(error instanceof RangeError ){
    console.log('Wrong value');
  }
  console.log(error);
}