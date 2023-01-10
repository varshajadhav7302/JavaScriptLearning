

/*let name = "John";
const age = 23;
var isMarried = true;

const anil = {
 
    age : 20,
   name : ,
    company : "Microsoft"
  
}


// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
Object.freeze(arrayNumbers);
arrayNumbers.push(10);
console.log(arrayNumbers)


const sunilAddress = {
    city : "Pune",
    pin: "431202"
}
// Merging two objects
Object.assign(sunil,sunilAddress);
console.log(sunil);

let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); 
console.log("Anil: ", anil); */




console.log(`======Assignment========`);
const personalDetails = {
    name : " Varsha",
    education : "BCA",
    DOB : "07/03/2002"
}
const collageDetails = {
    clgname : "RRC",
    fee : "16000",
    address : "Jath"
}
console.log(`========Question 1=========`);
console.log(`The my persinal details is :`);
console.log(personalDetails);

console.log(`========Question 2=========`);
console.log(`My grducation collage details is :`);
console.log(collageDetails);

console.log(`========Question 3=========`);
Object.assign(personalDetails,collageDetails);
console.log(`My perosnal and collage details : `);
console.log(personalDetails);

console.log(`========Question 4=========`);
var friend = ["Sagar","Komal","Pratiksha","Soniya","Divya"];
Object.freeze(friend);
for(let i = 0; i<5; i++){
    console.log(`My friends name is :${friend[i]}`);
}
console.log(`========Question 4=========`);
console.log(`The reverse the string `);
console.log(`The word "Codemind Technology" is reverse of "Technology is :"`);
var string = "Technology";
let reverseWord = "";
for(let i=string.length-1;  i >= 0; i--){
    reverseWord += string[i];  
    //string[i].concat();
}
console.log(reverseWord);

// 1 deep clone using spread operator
let empSumit = {
    empName : "Sumit",
    empSalary : "70K"
}
// ... Spread Operator
console.log(empSumit);
console.log({...empSumit});
let empMohit = {...empSumit};//deep cloning using spread operator
empMohit.empName="Mohit";
console.log(empMohit);
console.log(empSumit);

//2 deep clone using JSON.stringfy
const empStew = {
    name : "Stew Jobs",
    age : 50,
    marks : {
        science : 70,
        math : 90,
        english : 87
    }
}

 let empBill = JSON.parse(JSON.stringify(empStew));
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);





