const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	let total = 0;
  for(let i = 0; i < array.length ; i++){
    total += array[i];
  }
  return total;
 // console.log(total);
};
sum([1,2,3]);

const multiply = function(array) {
  let product = 1;
  for(let i = 0; i < array.length ; i++){
    product *= array[i];
  }
  return product;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);	
};

const factorial = function(number) {
  if(number === 0) return 1;
  let result = 1;
  while(number>=1){
    result *= number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
