var numAdd = 10+40;
var strAdd = "Pooja" + 70;
console.log(`strAdd is : ${strAdd}`);

console.log(`+ opertor can do the type conversion as well from string to number`);
var numStr = "100";
var num =  + numStr;
console.log(`typeof ${numStr} is : ${typeof numStr}`);
console.log(`typeof ${num} is : ${typeof num}`);

var numStr = "Chandra";
var num =  + numStr;// Explicit conversion
console.log(`typeof ${numStr} is : ${typeof numStr}`);
console.log(`typeof ${num} is : ${typeof num}`);

console.log(`== comparsion ${20 == "20"}`);//Implicit conversion

let result;
result = 4 + "4";
console.log(`typeof ${result} is ${typeof result}`);

var myNumber = 77;
console.log(`myNumber values ${myNumber} ans its type is : ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber values ${strMyNumber} and its type is : ${typeof strMyNumber}`);
 