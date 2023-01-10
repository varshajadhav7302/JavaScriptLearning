

const person = {
    name : "Virat Kolhi",
    age : 24,
    city : "Pune",
    pincode : 234556,
    tottalRun : 55000,
    isMarried : true
}

//let pincode = person.pincode;
//let totalRun = person.tottalRun;
//let city = person. city;
let {pincode, city, tottalRun, isMarried} = person;

console.log(pincode, city, tottalRun, isMarried);
console.log(person);

console.log("Array destructuring.....");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter"];
let [company1, company2, company3, company4, company5="Microsoft"] = arrayCompany;
console.log(company1, company2 , company3, company4, company5);

//Self Invoking Function or IIFE - Immediately Invoked Function Expression
console.log("Self Invoked Function or IIFE - Immediately Invoked Function Expression");
/*function display(){
    console.log();
}
display();*/

(function show(){
    console.log("You are inside show");
})();

//unkonwn function
let myFun =  function(){

}