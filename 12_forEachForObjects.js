
/*class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal");
console.log("====== Set of Vehicles =======");
    const setOfVehicles = new Set();
    setOfVehicles.add(audiA3);
    setOfVehicles.add(audiQ3);
    //setOfVehicles.add(mahindra);
    //setOfVehicles.add(honda);
    //setOfVehicles.add(hero);
    setOfVehicles.forEach( (itemVehicle)=> {
        console.log(itemVehicle.model);
    } );

    console.log("====== Map of Vehicles =======");
    let mapOfVehicles = new Map();
    mapOfVehicles.set("REG_11", audiA3);
    mapOfVehicles.set("REG_22", audiQ3);
    mapOfVehicles.set("REG_33", mahindra);
    mapOfVehicles.set("REG_44", hero);
    mapOfVehicles.set("REG_55", honda);

    mapOfVehicles.forEach((vehicleObject, regNo) => {
        console.log(vehicleObject.model, regNo);
    } );*/

    console.log("============ Assignment 1 ================= ");
    class Employee{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
}
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let mapOfEmployee = new Set();
mapOfEmployee.add(emp_anil);
mapOfEmployee.add(emp_mahi);
mapOfEmployee.add(emp_monika);
mapOfEmployee.add(emp_radha);
mapOfEmployee.add(emp_rishi);
mapOfEmployee.add(emp_sonali);
mapOfEmployee.add(emp_viny);

console.log("=========== Employee ============= ");
mapOfEmployee.forEach((itemEmployee)=>{
    console.log(itemEmployee);
});

console.log("======== 1. TCS Employee ==========");
mapOfEmployee.forEach((itemEmployee)=>{
    if(itemEmployee.emp_company == "TCS"){
        console.log(`Name of the employee : ${itemEmployee.emp_name}  Company name : ${itemEmployee.emp_company}`);
    }

});

console.log("======== 2. Employee salary is greater than or equal to 50000 ==========");
mapOfEmployee.forEach((itemEmployee)=>{
    if(itemEmployee.emp_salary >= 50000){
        console.log(itemEmployee);
    }

});

console.log("========= 3. Find the sum of the all employee salary ===========");
let sum = 0;
mapOfEmployee.forEach((itemEmployee)=>{
    sum = sum + itemEmployee.emp_salary;
});
console.log("The sum of the all employee salary is : ",sum);

console.log("========= 4. Find the average salary ===========");

let average = sum /7;
console.log("The sum of the all employee salary is : ",average);

console.log("======== 5. Find the IT or HR department employees whose salary is greater than or equal to 75000 ==========");
mapOfEmployee.forEach((itemEmployee)=>{
    if(itemEmployee.emp_dept == "IT" || itemEmployee.emp_dept == "HR" ){
        if(itemEmployee.emp_salary >= 75000){
            console.log(itemEmployee);
        }
        
    }

});


console.log("============ Assignment 2 ================= ");
/*class Employee{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
}
}
const emp_Anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");*/

const mapOfEmployee2 = new Map();
mapOfEmployee2.Set( 1,emp_anil);
mapOfEmployee2.Set(2,emp_mahi);
mapOfEmployee2.Set(3,emp_monika);
mapOfEmployee2.Set(4,emp_radha);
mapOfEmployee2.Set(5,emp_rishi);
mapOfEmployee2.Set(6,emp_sonali);
mapOfEmployee2.Set(7,emp_viny);
mapOfEmployee2.forEach(( currentValues)=>{
   console.log( `${currentValues.emp_id}====> Name : ${currentValues.emp_name} Company : ${currentValues.emp_company} Salary : ${currentValues.emp_salary}`);
})