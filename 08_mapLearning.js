



/*const mapOfNUMbers = new Map();//creating an map
mapOfNUMbers.set(11,"Eleven");//Adding element in ey value pai
mapOfNUMbers.set(22,"Twenty two");
mapOfNUMbers.set(2,"Two");
mapOfNUMbers.set(11, "Ten + one");
mapOfNUMbers.set(33,"Eleven");
mapOfNUMbers.set(44, "Fourty four");
mapOfNUMbers.set(50, "Fifty ");
console.log(mapOfNUMbers);

const valueForKey22 = mapOfNUMbers.get(22);
console.log(valueForKey22);

const valueForKey11 = mapOfNUMbers.get(11);
console.log(valueForKey11);

console.log(mapOfNUMbers.size);

mapOfNUMbers.delete(11);
console.log(mapOfNUMbers);

console.log(`=======To check whether given key is available or not`);
const iskeyAvailable =  mapOfNUMbers.has(2);
console.log(iskeyAvailable);
console.log(`Is key 1111 available : ${mapOfNUMbers.has(1111)}`);

console.log(`======Traversing over map=======`);
const keysOfMap =  mapOfNUMbers.keys();
console.log(keysOfMap);
for( const key of keysOfMap ){
    console.log(key, mapOfNUMbers.get(key));
}

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
const mapOfEmployee = new Map(); // key--> empID   value-->employee
mapOfEmployee.set(11, empSup);
mapOfEmployee.set(22, empSachin);
mapOfEmployee.set(33,empGayatri);
mapOfEmployee.set(44,empDhir);
const keysOfEmployee = mapOfEmployee.keys();
for( const keys of keysOfEmployee){
   const employee = mapOfEmployee.get(keys);
   //console.log(employee, employee.empcity);
   console.log(`Details : ${employee.empName} ${employee.empcity}`);
}*/

class Bank  {

    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
const axix_bank = new Bank("AXIS Bank","Dehu","AXIS23453","765433","5%");
const sbi_bank = new Bank("SBI Bank","Pune","SBIS23453","565433","8%");
const icici_bank = new Bank("ICICI Bank","Nigadi","ICICIS23453","465433","4%");
const kotak_bank = new Bank("Kotak Bank","Mumbai","KOTAK23453","865433","6%");
const panjab_bank = new Bank("PANJAB Bank","Dehu","PANJ23453","965433","7%");
console.log("========Created a object========")
console.log(axix_bank,sbi_bank,icici_bank,kotak_bank,panjab_bank);
const mapOfBanks = new Map();
mapOfBanks.set(1, axix_bank);
mapOfBanks.set(2, sbi_bank);
mapOfBanks.set(3, icici_bank);
mapOfBanks.set(4, kotak_bank);
mapOfBanks.set(5, panjab_bank);
const keysOfBank = mapOfBanks.keys();
console.log("======Only bank name and account no and interest rate======");
for(const keys of keysOfBank){
    const data = mapOfBanks.get(keys);
    //console.log(data);
    console.log(`${data.bank_name}    ${data.account_no}      ${data.interest_rate}`);
}
