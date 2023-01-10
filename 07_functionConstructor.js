function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 Student.prototype.country = "India";
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);
 console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);
 console.log(vinny.country);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);


 const arrayNum = [3,5,6,8,9];
 let arrayOfNum = arrayNum.length;
 arrayNum.push(10);
 arrayNum.pop();
 arrayNum.unshift();

 let date = new Date("1996-12-22");
 let month = date.getMonth();
 let year = date.getFullYear();
 let day = date.getDay();
 console.log(month,year,day);

 let sqrt = Math.sqrt(4);
 console.log(sqrt);

 console.log(`=======Assignment========`);
 class bank{
    BankName
    Branch
    IFSC
    BranchCode
    constructor(BankName,Branch,IFSC,BranchCode){
        this.BankName = BankName;
        this.Branch = Branch;
        this.IFSC = IFSC;
        this.BranchCode = BranchCode;
    }

 }
 let yesBank = new bank("Yes Bank","Pune","YES87667897","1232");
 let SBIBank = new bank("SBI Bank","Mumbai","SBI764563","5414");
 let AXISBank = new bank("AXIS Bank","Sangli","AXIS7421267","5621");
 let Maharashtra = new bank("Maharashtra Bank","Jath","MH32356543543","8762");
 console.log(yesBank);
 console.log(SBIBank);
 console.log(AXISBank);
 console.log(Maharashtra); 
 console.log(`===========opening and closing time of banks===========`);
 bank.prototype.openTime = "9 AM IST";
 bank.prototype.closeTime = "6 PM IST";
 console.log(`The open time if Yes Bank is"${yesBank.openTime}" and close time is "${yesBank.closeTime}"`);
 console.log(`The open time if SBI Bank is"${SBIBank.openTime}" and close time is "${SBIBank.closeTime}"`);
 console.log(`The open time if AXIS Bank is"${AXISBank.openTime}" and close time is "${AXISBank.closeTime}"`);
 console.log(`The open time if Maharahtra Bank is"${Maharashtra.openTime}" and close time is "${Maharashtra.closeTime}"`);