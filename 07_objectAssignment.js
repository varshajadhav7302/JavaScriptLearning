 console.log(`Creating an empty object with name professor`);
const professor = {
    name : "Varsha Jadhav",
    age : 20,
    gender : "Female",
    company : "wipro",
    height : 5.3,
     degrees : {
        engineering : `CSC`,
        PHD : `Adv Computong`,
    },
    
    certificates : {
        certificate1 : `Hacker Rank Participation`,
        certificate2 : `Certificate in IFE course`,
        certificate3 : `Certificate in Adv Programming`,

    },
    add : function(){
     showdetails = this.engineering + this.PHD; 
    }

}
console.log(professor);

console.log(`=================Question 2 =================`);
console.log(`Create nested object "degrees"`);
console.log(professor.degrees);

console.log(`=================Question 3 =================`);
console.log(`Create nested object "certificates");
console.log(professor.certificates);


console.log("=================Question 5 =================`);
console.log(`Add new property height`);
console.log(professor);


console.log(`=================Question 6=================`);
console.log(`Modify property enginerring`);
professor.degrees.engineering = "Mecanical";
console.log(professor.degrees);

console.log(`=================Question 7=================`);
console.log(`Delete one certificate from nested object`);
delete professor.certificates.certificate2;
console.log(professor.certificates);

console.log(`=================Question 8=================`);
console.log(`Add new certificate in nested object`)
professor.certificates.certificate4 = `C progarm`;
console.log(professor.certificates);

console.log(`=================Question 9=================`);
console.log(``)
console.log(professor.certificates);



console.log(`======Assignment 2 =======`);

const sbiBank = {

    bankName : "SBI",
    location : "Pune",
    accountNo : 1234567899876,
    ifsc : "SBI565432",
    intrestRate : "8%"
}
console.log(`The sbiBank Details is : `);
console.log(sbiBank);
 const  hdfcBank = {
    bankName : "HDFC",
    location : "Latur",
    accountNo : 1234567899876,
    ifsc : "HDFC565432",
    intrestRate : "10%"
}


 const axisBank = {
    bankName : "AXIS",
    location : "Mumbai",
    accountNo : 1234567899876,
    ifsc : "AXIS565432",
    intrestRate : "7%"
}

 const yesBank = {
    bankName : "YES",
    location : "Sangli",
    accountNo : 1234567899876,
    ifsc : "YES565432",
    intrestRate : "12%"
}


console.log(`The axisBank Details is : `);
console.log(axisBank);
console.log(`The hdfcBank Details is : `);
console.log(hdfcBank);
console.log(`The yesBank Details is : `);
console.log(yesBank);