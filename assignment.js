console.log(`==========******=========`);
console.log(`1. Total number vowels in the string`);
var string = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < string.length; index++) {
  var char = string.charAt(index);
 
  if (
    char == "a" ||
    char == "A" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    //console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

console.log(`==========******=========`);
console.log(`2. The sum of cube of numbers form 1 to 5`);
var num;
var cube = 0;
for(num = 1; num <= 5; num++){
    cube = cube + num * num * num;
    console.log(`The cube is : ${cube}`);
}
console.log(`The sum of cube of numbers form 1 to 5 is  : ${cube}`);

console.log(`==========******=========`);
/*var string;
function oddPositionedchars(string){
    console.log(`The string is : ${string}`);
    var stringLength = string.length;
    console.log(`The length of the string is : ${stringLength}`);
    var stringWord = string.split(' ');
    var stringWordLength = stringWord.length;
    console.log(stringWord);
    console.log(stringWordLength);

    
    for(let index = 0; index < spaceLength; index++ ){
        var char = stringSpace.charAt(index);
        if(index%2 == 1){
            console.log(char);
        }
    }
}
oddPositionedchars("Hard work always pays back");*/


console.log(`==========******=========`);
console.log(`4. Factorial number `);

function factorialNumber(num){
    //console.log(`* The number is : ${num}`);
    var fact=1;
    for(let index = num; index >= 1; index--){
       
        fact = fact * index;
    }
    console.log(`The factoril of ${num} is : ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);
