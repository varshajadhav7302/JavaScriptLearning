
console.log(`=============Arithmetic Operator=============`);
var num1=10;
var num2=5;
 
var addResult = num1 + num2;
console.log(`Addition is ${addResult}`);
var subResult= num1-num2;
console.log(`substraction is ${subResult}`);
var mulResult=num1*num2;
console.log(`Multiplication is ${mulResult}`);
var divResult=num1/num2;
console.log(`Division is ${divResult}`);

var modulusResult = num1 % num2;
console.log(`Moduls is ${modulusResult}`);

console.log(`============Assignment Operator==============`);
var modulusResult = num1 % 3;
console.log(`Modus is ${modulusResult}`);

num1 += num2;
console.log(`Compund Addition ${num1}`);
console.log(`Compund substration is ${num1 -= num2}`);
console.log(`Compund multilpication is ${num1 *= num2}`);
console.log(`Compund division is ${num1 /= num2}`);
console.log(`Compund moduls is ${num1 %= num2}`);

console.log(`============Unary Operator==============`);
var num3=10;
//num3 = num3 + 1;
//console.log(`The value is ${num3}`);
num3 = num3++;
console.log(`The value is ${num3}`);
num3 = ++num3;
console.log(`The value is ${num3}`);

var num4 = 5;
var res = --num4;
console.log(`The substraction is ${res}`);

console.log(`============Comparision Operator==============`);
var num1=10;
var num2=5;
var result = num1 > num2;
console.log(`> operator = Greater than ${result}`);

var result = num1 < num2;
console.log(`< operator = Less than ${result}`);

var result = num1 >= num2;
console.log(`>= operator = Greater than equal ==> ${result}`);

console.log(`check even or odd : ${11%2==0}`);

console.log(`=========********=========`);
console.log("====Question 1====");
var val1="JavaScript";
var val2="Developer";
var val3="Google Chorme";
var wordLengthSquare= val1.length;
var wordLengthSquare1= val2.length;
var wordLengthSquare2= val3.length;
console.log(`The length of "JavaScript": ${wordLengthSquare} `);
console.log(`The square of lenght is : ${wordLengthSquare*wordLengthSquare}`);
console.log(`The length of "Developer": ${wordLengthSquare1} `);
console.log(`The square of lenght is : ${wordLengthSquare1*wordLengthSquare1}`);
console.log(`The length of "Google": ${wordLengthSquare2} `);
console.log(`The square of lenght is : ${wordLengthSquare2*wordLengthSquare2}`);
console.log("=====Question 2=====");
var string = "I am Angular Developer";
var stringLength = string.length;
var stringWord = string.split(" ");
var stringWordLength = stringWord.length;
console.log(`The string is : ${string} `);
console.log(`The Length of string is : ${stringLength}`);
console.log(`The words in the string : ${stringWordLength}`);
console.log(`The length is divided by words in the string = ${stringLength/stringWordLength}`);
console.log(`The length is multiplication by wors in the string = ${stringLength*stringWordLength}`);
