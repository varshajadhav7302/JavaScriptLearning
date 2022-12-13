
var myName="Mohit";
console.log(myName);
//function Expression
var showResult=function show(){
    console.log("show------");
};
showResult();
// substraction
var substraction=function(num1,num2){
    var result=num1-num2;
    console.log("substraction---------",result);
    return result;
}
var result=substraction(20,30);
console.log(result);
console.log("----------******-------------");
var square=function(num){
    console.log("Square of",num,"=",num*num);
}
console.log(typeof substraction)
square(5);
square(100);

console.log("----------******-------------");
console.log("----------******-------------");