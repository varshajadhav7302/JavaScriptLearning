

const arrayNumbers= [10, 3, 4, 50, 6];
arrayNumbers.forEach(function(currentValue, index, array){
 console.log(currentValue, index, array);
});

arrayNumbers.forEach(function(currentValue){
    console.log(currentValue);
   });

arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});

arrayNumbers.forEach(currentValue=>console.log(currentValue));

console.log("======== Find even numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
      console.log(currentValue);
    }
});


//value and index
array.forEach((currentValue, index, array)=>{
    console.log(currentValue, "index", index);
});


console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);




console.log("============ Assignment 2 =============");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(array_numbers);

console.log("=======1. Log the array element with it's index using forEach()======== ");
array_numbers.forEach((currentValue, index,array_numbers) => {
    console.log("Element is : ", currentValue, " index : ", index);
});

console.log("=======2. find the positive numbers using forEach() ==========");
array_numbers.forEach((currentValue) =>{
        if(currentValue >= 0){
            console.log(`The positive numbers is : ${currentValue}`);
        }
});


console.log("=======3. Find the negative numbers, add into new array and log on console using arrow function=========");
const arrayNegative = [];
array_numbers.forEach((currentValue) =>{
    if(currentValue < 0){
        arrayNegative.push(currentValue);
        console.log(currentValue);
    }
});
console.log("Array of negative number is : ");
console.log(arrayNegative);


console.log("=======4. find the even numbers using forEach() ==========");
array_numbers.forEach((currentValue) => {
        if(currentValue%2==0){
            console.log(`The even numbers is : ${currentValue}`);
        }
});

console.log("======5. Find the sum of all elements from array_numbers and log on sum of values on console=========");
let sum = 0;
array_numbers.forEach((currentValue) => {
    sum = sum + currentValue;

});
console.log("The sum of the all elements is : ", sum);


console.log("======= 6. Log only even positioned array value ======= ");
array_numbers.forEach((currentValue, index,array_numbers) => {
    if(index %2== 0){
        console.log("Element is : ", currentValue, " index : ", index);
    }  
});
console.log("The even posiyioned value is :")