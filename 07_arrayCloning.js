let arrayOfEvenNum = [0, 2, 4, 6, 8];
let arrayOfNum = arrayOfEvenNum; // shallow cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// deep cloning 
console.log("Array Deep Cloning");
let arrayOfNumber = [0, 2, 4, 6, 8];
let arrayClone = [...arrayOfEvenNum];//Deep clone
arrayOfNumber[2] = 100;
arrayClone[2] = 200;
//console.log(arrayOfNumber);
//console.log(arrayClone);

//
let kat = {
    name : "Katrina",
    role : "Actress",

}
let jack = kat;

let arrayNum = [0, 2, 4, 6, 8];
let arrayNumb = [1,2,3,4];
let concatArray = arrayNum.concat(arrayNumb);
console.log(arrayNum);
//console.log(arrayNumb);
//console.log(concatArray);

let mergeArray = [...arrayNum, ...arrayNumb];
console.log(mergeArray);

console.log(`========== Assignment ===========`);
let arrayNums = [20,3,4,56,90,400,49];
console.log(`The arrayNums is :${arrayNums}`);
console.log(`1. using shallow cloing :`);
let arrayShallowClone = arrayNums;
console.log(arrayShallowClone);

console.log(`===1. update vales using push=== `);
arrayNums.push(56,66);
console.log("Without colning array :",arrayNums);
arrayClone.push(56,66);
console.log("With cloning array:",arrayClone);

console.log(`====2. deep clone using spread operator ==== `);
let deepCloneArray = [...arrayNums];
deepCloneArray.push(10,25);
console.log(`Updated arrayNums with values 10, 25 in last position is = `);
console.log(deepCloneArray);

console.log(`====3. Merge or concat using spread operator===`);
let arrayEven = [2,30,14,8];
let mergeArray2 = [...arrayNums,...arrayEven];
console.log(`Merge arrayNums and arrayEven is :${mergeArray2}`);

let concatArray2 = arrayNums.concat(arrayEven);
console.log(`Concat arrayNums and arrayEven is : ${concatArray2}`);

console.log(`====4. Creat the employee_info object ==== `);
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50.0000INR",
        jun_month : "65,0000INR"
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles :
        ("+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77")
    
}
console.log(`====5. Employee details ====`)
console.log(`John address is: 1.Locality is : Colony is :${employee_info.address.locality.colony} street is : ${employee_info.address.locality.street}2. City is : ${employee_info.address.city}, 3. state is : ${employee_info.address.state}, 4. country is : ${employee_info.address.country}, 5. Mobile Number is : ${employee_info.mobiles}`);

console.log(`====6. deep copy using JSON.stringfy====`);
let jsonEmp = JSON.parse(JSON.stringify(employee_info));
console.log(jsonEmp);

console.log(`====6.a update july_month salary====`);
employee_info.salary.july_month = "80K";
console.log(employee_info.salary);

console.log(`==== 6.b update country====`);
employee_info.address.country = "United Kingdom";
console.log(employee_info.address.country);

console.log(`====6.c log updated values nd original and cloned object`);
console.log(employee_info.salary.july_month);
console.log(employee_info.address.country);

console.log(`========= Assignment 2 ===========`);
const car = {
    carName : "Creta Sx",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
console.log("====using object.assign()====");
let objectCar = Object.assign(car,carEngine);
console.log(objectCar);

console.log("===Using spread operator===");
let spreadCar = {...car,...carEngine};
console.log(spreadCar);
