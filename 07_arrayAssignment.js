var fruits_seasonal =["Banana", "Orange", "Apple",
"Mango","Water Melon"];
console.log(fruits_seasonal);

console.log(`===================Question 1======================`);
console.log(`The first element is : ${fruits_seasonal[0]}`);
console.log(`The last element is : ${fruits_seasonal[4]}`);

console.log(`====================Question 2=====================`);
fruits_seasonal.unshift("Papaya");
console.log(`Add element --> Papaya before the element "Banana" : ${fruits_seasonal}`);
//console.log(fruits_seasonal);

console.log(`====================Question 3====================`);
console.log(fruits_seasonal);
var spliced = fruits_seasonal.splice(4,1);
console.log(`Remove "Mango" from the array is : ${fruits_seasonal}`);

//console.log(fruits_seasonal);

console.log(`====================Question 4======================`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(`Add element or insert an element "Pinpeapple" at the lat position : ${fruits_seasonal}`);
//console.log(fruits_seasonal);

console.log(`====================Question 5======================`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`Insert elemrnt -- "Dragaon fruit" before "Water Melon": ${fruits_seasonal}'`)
//console.log(fruits_seasonal);

console.log(`====================Question 6======================`);
console.log(fruits_seasonal);
fruits_seasonal[2] = "Kiwi";
console.log(`Replace element "Orange" to "Kiwi": ${fruits_seasonal}`);

console.log(`====================Question 7======================`);
console.log(fruits_seasonal);
console.log(`Log on the elements starting from index 1 to 4 :${fruits_seasonal.slice(1,4)}`);

console.log(`====================Question 8======================`);
console.log(fruits_seasonal);
let res = fruits_seasonal.slice(-3);
console.log(`Only select last 3 elements and log on console:${res}`);



const arrayNumbers = [20, 31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`====================Question 1======================`);
let arrayLength = arrayNumbers.length;
console.log(`The length of thr array is : ${arrayLength}`);

console.log(`====================Question 2======================`);
const first = arrayNumbers[0];
const last = arrayNumbers[arrayLength-1];
console.log(`The first element in arrayNumbers is :${first}`);
console.log(`The last element in arrayNumbers is :${last}`);

console.log(`====================Question 3======================`);
let thirdLastElement = arrayNumbers[arrayLength-3];
console.log(`The Third last element using length property : ${thirdLastElement}`);

console.log(`====================Question 4======================`);
for (let index = 0; index < arrayLength; index++){
    if(arrayNumbers[index]%2 == 0){
        console.log(`The even number in array is : ${arrayNumbers[index]}`);
    }
}

console.log(`====================Question 5======================`);
for (let index = 0; index < arrayLength; index++){
    if(arrayNumbers[index]%2 !== 0){
        console.log(`The odd number in array is : ${arrayNumbers[index]}`);
    }
}

console.log(`====================Question 6======================`);
for (let index =0; index < arrayLength; index++){
    if(index%2 == 0){
        console.log(`The even positioned element is : ${arrayNumbers[index]} `);

    }
}

console.log(`====================Question 7======================`);
for (let index =0; index < arrayLength; index++){
    if(index%2 !== 0){
        console.log(`The odd positioned element is : ${arrayNumbers[index]} `);

    }
}

console.log(`====================Question 8======================`);
let sumOfarray = 0;
for (let index = 0; index < arrayLength; index++){
    const element = arrayNumbers[index];
    sumOfarray = sumOfarray + element;
}
console.log(`The sum of the array is : ${sumOfarray}`);

console.log(`====================Question 9======================`);
for (let index =0; index < arrayLength; index++){
    if(arrayNumbers[index]%5 == 0){
        console.log(`The odd positioned element is : ${arrayNumbers[index]} `);

    }
}

console.log(`====================Question 10======================`);
let numAvailable1 = arrayNumbers.includes(115)
console.log(`Number 115 is available in the arrayNUmbers : ${numAvailable1}`);

console.log(`====================Question 11======================`);
let numAvailable2 = arrayNumbers.includes(23)
console.log(`Number 23 is available in the arrayNUmbers : ${numAvailable2}`);

console.log(`====================Question 12======================`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log(`Insert numbers 55 66 before index 3 : ${arrayNumbers}`);

console.log(`====================Question 13======================`);
console.log(arrayNumbers);
arrayNumbers.splice(4,3);
console.log(`The delete number starting from the index 4 : ${arrayNumbers}`);
