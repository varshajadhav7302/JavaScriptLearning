class Employee {
    name
    id
    age
    city
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    }
    details(){
        console.log(this.name,this.id,this.city,this.age);
    }
}
let empsmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 30000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empsmith);
console.log(empJay);
console.log(empBill.name,empBill.age,empBill.city,empBill.id);
empsmith.details();
empJay.details();


console.log(`==========Assignment==========`);
console.log(`=====1.Define a class vehical=====`)
class Vehical {
    name
    color
    model
    engine
    constructor(name,color, model ,type){
        this.name = name;
        this.color = color;
        this.model = model;
        this.type = type;
    }
}
let vehical1 = new Vehical("Alto","Red","Maruti Alto","4 wheeler");
let vehical2 = new Vehical("Hatback","White","Swift","4 Wheeler");
let vehical3 = new Vehical("Ertiga","Yellow","Suzuki","4 Wheeler");
let vehical4 = new Vehical("Baleno","Purple","Zeta","4 Wheeler");
let vehical5 = new Vehical("Sports Car","Black","Toyoto","4 Wheeler");
console.log(`==*Name**Color**Model**Type*==`)
console.log("1.",vehical1.name,vehical1.color,vehical1.model,vehical1.type);
console.log("2.",vehical2.name,vehical2.color,vehical2.model,vehical2.type);
console.log("3.",vehical3.name,vehical3.color,vehical3.model,vehical3.type);
console.log("4.",vehical4.name,vehical4.color,vehical4.model,vehical4.type);
console.log("5.",vehical5.name,vehical5.color,vehical5.model,vehical5.type);
console.log(vehical1);
console.log(vehical2);
console.log(vehical3);
console.log(vehical4);
console.log(vehical5);

console.log(`=====2. Define a class collage=====`);
class collage {
    name
    location
    courses
    cityName
    constructor( name,location,courses,cityName){
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.cityName = cityName;
    }
    info(){
        console.log(this.name,this.location,this.courses,this.cityName);
    }
}
console.log(`*==By Using function==*`)
let collage1 = new collage("KM collage","Jath","BCA","Jath");
let collage2 = new collage("SR collage","Sangli","BSC","Sangli");
let collage3 = new collage("RR collage","Miraj","BBA","Miraj");
let collage4 = new collage("SS Collage","Vijapur","MCA","Vijaour");
let collage5 = new collage("VP collage","Kolhapur","MBA","Kolhapur");
collage1.info();
collage2.info();
collage3.info();
collage4.info();
collage5.info();

console.log(`==========Question 3==========`);
function traverseObject(){
    for (const key in collage1) {
        if (Object.hasOwnProperty.call(collage1, key)) {
            const element = collage1[key];
            console.log(key,collage1); 
        }
    }
}
traverseObject();

//console.log(`=======Question 4=======`)






