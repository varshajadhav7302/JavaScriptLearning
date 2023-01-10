const array = [2,4,5,2,3,5,6,3];
//new myArray = new array();
const setNumbers = new Set();
console.log(`Adding element in set`);
setNumbers.add(0);//add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1);//Adding duplicate element
setNumbers.add(3);//Adding duplicate element  
setNumbers.add(5);
setNumbers.add(6);
console.log(setNumbers);

console.log(`Total available elements in set`);
const totalElements = setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);

const isDeleted3 = setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log(`Is 3 deleted : ? ${isDeleted3}, Is 99 Deleted : ${isDeleted99}`);

console.log(`Check element is available or not using has`);
const isAvailable4 = setNumbers.has(4);
const isAvailable77 = setNumbers.has(77);
console.log(`Is 4 avaiable  : ? ${isAvailable4}, Is 77 avaiable : ${isAvailable77}`);

console.log(`Clearing set using clear()`);
//setNumbers.clear();
console.log(setNumbers);

console.log(`Type of set is : ${typeof setNumbers}`);

for ( const element of setNumbers){
    console.log(element);
}

console.log(`Removing duplicate elements`);
let arrayOfNumbers = [5,6,4,6,5,5,6];
/*const mySet = new Set(arrayOfNumbers);
console.log(mySet);
const myArray = [...mySet]; //Spread operator
console.log(myArray); */
const myArray = [...new Set(arrayOfNumbers)];
console.log(myArray);

class Employee {
    constructor(empId, empName, empAge, empcity){
        this.empId = empId;
        this.empName = empName;
        this.empAge = empAge;
        this.empcity = empcity
    }
}
const empSup = new Employee(11, "Supriya", 23, "Pune");
const empDhir = new Employee(22, "Dheraj", 24, "Mumbai");
const empSachin = new Employee(33, "Sachin", 22, "Surat");
const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");

//console.log(empSup);
//console.log(empDhir);

//collection - collection of elements 
//elements of Datatypes - primitive and Non primitive (Reference )
const arrayOfEmployee = [empSup,empDhir,empSachin,empGayatri];
//const obj = arrayOfEmployee[0];
//console.log(obj);
for (const employee of arrayOfEmployee) {
    console.log(`Employee details are : ${employee.empId}  ${employee.empName}  ${employee.empAge}  ${employee.empcity}`);
}

const setOfEmployees = new set();
setOfEmployees.add(empSup);
setNumbers.add(empGayatri);
setOfEmployees.add(empSachin);
setOfEmployees.add(empDhir);


