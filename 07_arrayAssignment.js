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


