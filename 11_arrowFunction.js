

// Arrow function with no argument and no return value
let show = ()=>{
    console.log("Hello");
}
show();
// => function Syntax
// let fun = ()=>{


// Arrow Function with argument 
let sum = (n1, n2)=>{
    console.log(n1+n2);
}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2)=> {
    let mul = n1*n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);

console.log("=========== Assignment 1 ==========");
console.log("======= 1 ========");
let show1 = () => {
    console.log("Good Morning, Today is Monday");
}
show1();

console.log("======= 2 ========");
let multi = (num1, num2, num3) => {
    console.log("  The multiplication of three parameters is : ",num1*num2*num3);

}
console.log("A. When pass the value 5, 5, 2");
multi(5,5,2);
console.log("B. when the values pass 10, 4 and num3 = 1 ");
multi(10,4,1)


console.log("======= 3 ========");
 let addition = (val1, val2, val3, val4, val5) => {
    console.log("The addition received parameters is :", val1 + val2 + val3 + val4 + val5);
 } 
 console.log("A. Values to passed => 100, 100, 200, 349, 756");
 addition(100, 100, 200, 349, 756);
 console.log(`C. vales is : "I am", "learning", "ES6", "features", "in depth"`);
 addition("I am ", "learning ", "ES6 ", "features ", "in depth ")
