var num1 = 10;
var num2 = "10";
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof '100');

var result = num1==num2 ? "Equal" : "Not Equal";
console.log(`num1==num2==> ${result}`);

var res = num1===num2 ? "Equal" : "Not Equal";
console.log(`num1===num2==> ${res}`);

// If SSC marks greater than equal to 35 then pass or fail

var sscMarks = 39;
var resultPassOrFail= sscMarks>=35 ? "Pass"  : "Fail";

 console.log(`Result is ${resultPassOrFail}`);

 var sscResult = function(sscMarks){ 
    // var resultPassOrFail= (sscMarks>=35 && !(sscMarks>100)) ? "Pass"  : "Fail";
    // var resultPassOrFail= (sscMarks>=35 && sscMarks<100) ? "Pass"  : "Fail";
    var resultPassOrFail= (sscMarks < 0 || sscMarks > 100 ) 
        ? "In valid Data" 
        : (sscMarks>35 ? "Pass" : "Fail"); 
    return resultPassOrFail;
 }

console.log(`Result is 23  ${sscResult(23)}`);// Valid Value
console.log(`Result is 45  ${sscResult(45)}`);// Valid Value
console.log(`Result is 65  ${sscResult(65)}`);// Valid Value

console.log(`Result is 1200 ${sscResult(1200)}`); // Invalid value
console.log(`Result is "Ten" ${sscResult("Ten")}`); // Invalid value
console.log(`Result is -10 ${sscResult(-10)}`); // Invalid value
console.log(`Result is null ${sscResult(null)}`); // Invalid value
console.log(`Result is undefined ${sscResult(undefined)}`); // Invalid value

console.log(`======*****=========`);
var val1=10;
var val2=-10;
var result1= val1 > val2 ? val1 : val2 ;
console.log(`The greatest number in 10 and -10 is : ${result1}`);
var val3=800;
var val4=899;
var result2= val3 > val4 ? val3 : val4 ;
console.log(`The greatest number in 10 and -10 is : ${result2}`);
console.log(`======*****=========`);
var evenOdd1=function(num1){
     var result3= num1%2==0 ? "Even Number" : "Odd Number";
     console.log(`The number 29 is ${result3}`);
} 
evenOdd1(29);
var evenOdd2=function(num2){
    var result4= num2%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 44 is ${result4}`);
} 
evenOdd2(44);
var evenOdd3=function(num3){
    var result5= num3%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 0 is ${result5}`);
} 
evenOdd3(0);
var evenOdd4=function(num4){
    var result6= num4%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 29 is ${result6}`);
} 
evenOdd4(101);

console.log(`======*****=========`);
var stringEvenOdd=function(string1){
    var stringlength=string1.length;
    var lengthEvenOdd= string1.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "JavaScript" is ${lengthEvenOdd}`);
} 
stringEvenOdd("JavaScript");
var stringEvenOdd2=function(string2){
    var stringlength2=string2.length;
    var lengthEvenOdd2= string2.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "Developer" is ${lengthEvenOdd2}`);
} 
stringEvenOdd2("Developer");
var stringEvenOdd3=function(string3){
    var stringlength3=string3.length;
    var lengthEvenOdd3= string3.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "Google" is ${lengthEvenOdd3}`);
} 
stringEvenOdd3("Google");
console.log(`======*****=========`);
function maleMarriage(gender,age,name){
    var r = gender=="male"&& age>=21 ? `Yes, ${name} are you eligible for marriage` :`Sorry, ${name} you are not eligible for marriage`;
    console.log(`${r}`);
}
maleMarriage("male",25,"Billgates");
maleMarriage("male",17,"Srew Jobs");
console.log(`======*****=========`);
function femaleMarriage(gender,age,name){
    var r = gender=="female"&& age>=18 ? `Yes, ${name} are you eligible for marriage` :`Sorry, ${name} you are not eligible for marriage`;
    console.log(`${r}`);
}
femaleMarriage("female",16,"Jenifer");
femaleMarriage("female",27,"Malinda Gates");

console.log(`============************=============`);
function tcsInterview(gradScore,hscScore,sscScore,candidateName){
    if(gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ){
        console.log(`Congartes ${candidateName} you are eligible for TCS interview.`);
    }
    else{
        console.log(`Unfortunately you are not eligible for interview`);
    }
}
tcsInterview(80,86,90,"Varsha Jadhav");
tcsInterview(70,65,55,"Komal Kamble");
tcsInterview(60,79,88,"Sagar Misla");
  
