
console.log(`=====Object Array assignment=====`);
class Bank  {

    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
 console.log("===== B.Create object =====") ; 
const axix_bank = new Bank("AXIS Bank","Dehu","AXIS23453","765433","5%");
const sbi_bank = new Bank("SBI Bank","Pune","SBIS23453","565433","8%");
const icici_bank = new Bank("ICICI Bank","Nigadi","ICICIS23453","465433","4%");
const kotak_bank = new Bank("Kotak Bank","Mumbai","KOTAK23453","865433","6%");
const panjab_bank = new Bank("PANJAB Bank","Dehu","PANJ23453","965433","7%");

console.log(axix_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(panjab_bank);

console.log("======C. Array and Traverse this array using for loop console name and location =====")
const arrayBank = [axix_bank,sbi_bank,icici_bank,kotak_bank,panjab_bank];
for ( const Bank of arrayBank){
    console.log(`The Bank name and location is : ${Bank.bank_name} ==> ${Bank.location}`);
}

console.log("======D. Kotak bank using for loop =====");
for ( const Bank of arrayBank){
    console.log(`The details of Kotak bank is : ${kotak_bank.bank_name}, Location : ${kotak_bank.location}, Account NO : ${kotak_bank.account_no}, ifsc : ${kotak_bank.ifsc}, interest rate : ${kotak_bank.interest_rate}`)
;}

console.log("=====E. using for loop=====" );
for(const Bank of arrayBank){
    console.log(`The bank name is :${Bank.bank_name} ==>Location :${Bank.location} ==>Account no :${Bank.account_no} ==>ifsc code :${Bank.ifsc} ==>Interest rate :${Bank.interest_rate}`);
}



