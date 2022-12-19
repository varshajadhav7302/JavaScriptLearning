var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);

var resultAdd = resultDivide + 10;
console.log(`resultAdd is: ${resultAdd}`);

var resultMul = resultDivide * 10;
console.log(`resultMul is: ${resultMul}`);

var num = new Number("Prathamesh"); 
console.log(`num is: ${num}`);

console.log(`============************=============`);
var num1 = 0 == ' ';
console.log(`(0 ==' ') is ${num1}`);
var num2 = 0 == '0';
console.log(`(0 =='0') is ${num2}`);
var num3 = 0 == false;
console.log(`(0 == false) is ${num1}`);
var num4 = null == undefined;
console.log(`(null == undefined) is ${num4}`);
var num1 = 1 == [1];
console.log(`(1 == [1]) is ${num4}`);
var num5 = 1 == true;
console.log(`(1 == true) is ${num5}`);
var num6 = 1 == '1';
console.log(`(1 =='1') is ${num6}`);