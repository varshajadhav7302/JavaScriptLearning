/*let arrayOfNames = [5, 10, 4, 6, 7, 10, 6];  //Empty Array
console.log(arrayOfNames);

console.log(`=======Total number of elements available in array======`);
let totalElements = arrayOfNames.length;
console.log(`Total Elements in arrayOfNumber -->${totalElements}`);

let typeOfArray = typeof arrayOfNames;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`====Accessing array element====`);
let elementAtZeroIndex = arrayOfNames[0];
console.log(`Element at zero Index : ${elementAtZeroIndex}`);
console.log(`Element of Fifth Index : ${arrayOfNames[4]}`);

console.log(`Last Element is : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNames}`);
*/

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let index7 = arrayOfNumbers.indexOf(7);
console.log(`Index of 7--> ${index7}`);

let index10 = arrayOfNumbers.indexOf(10);
console.log(`Index of 10 --> ${index10}`);

console.log(`Traversing array using for loop`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}

console.log(`Accessing only even indexed values`);
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if(index%2==0){
    const element = arrayOfNumbers[index];
    console.log(element);
    }
}


// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);


let arrayOfSal = [10000, 20000, 30000, 20000, 40000];
console.log(arrayOfSal);
//let sum = 20;
//sum = 40;
arrayOfSal[1] = 40000;
console.log(arrayOfSal);

console.log(`======Push Method(add numbers in the end )=======`)
let arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3);
arrayOfNum.push(11,22,33);
console.log(arrayOfNum);

console.log(`========unshift method(add number in starting)========`);
arrayOfNum.unshift(77);
//arrayOfNum.unshift(23,67,68);
console.log(arrayOfNum);
let unshiftResult = arrayOfNum.unshift(99,111,333);
console.log(arrayOfNum);
console.log(unshiftResult);


console.log(`======== pop() methods(last number delete)=========`);
var  arrayOfNum1 = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum1.pop();
console.log(popResult);
console.log(arrayOfNum1);

console.log(`======shift method(start number delete)`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33];
console.log(arrayOfNum2);
let shiftResult = arrayOfNum2.shift();
console.log(shiftResult);
console.log(arrayOfNum2);


console.log(`=======slice method========`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33];
let sliceResult = arrayOfNum2.slice(3);
let sliceRes = arrayOfNum2.slice(2,5);
console.log(arrayOfNum2);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======splice method=========`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
let spliceResult = arrayOfNum2.splice(3);
console.log(`After using splice(3) method`);
console.log("Array after deleting element : ",arrayOfNum2);
console.log("Total deleted elements : ",spliceResult);

console.log(``)
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum2);
let spliceRes = arrayOfNum2.splice(2,3);
console.log(`After using splice(2,3) method`);
console.log("Array after deleting elements", arrayOfNum2);
console.log("Total deleted elements : ", spliceRes);

console.log(`=======Insering element in the array`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum2);
arrayOfNum2.splice(2,0,88);
console.log(arrayOfNum2);
arrayOfNum2.splice(1,0,55,99,22);
console.log(arrayOfNum2);

console.log(`=======Replacing element  in the array======`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum2);
arrayOfNum2.splice(3,1,22222);
console.log(arrayOfNum2);

console.log(`Replacing element  in the array when splice(2,3, 99,77)`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum2.splice(2,3,99,77);
console.log(arrayOfNum2);

console.log(`======for of loop=======`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum2);
for (const element of arrayOfNum) {
    console.log(element);
}

/*console.log(`======join()=======`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
let joinResult = 
console.log(joinResult);
console.log(typeof joinResult);*/

console.log(`======== concat() ==========`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);

console.log(`======== Resize an array ==========`);
var arrayOfNum2 = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);

