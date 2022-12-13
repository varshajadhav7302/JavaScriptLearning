function show() {
  console.log("RR collage");
}
show();
function showDetails(myName) {
  console.log("Details", myName);
}
showDetails("Mohit sharma");
showDetails("Raju Raju");
function rajuBhaiya(paise, bag, mobile) {
  console.log(paise);
  console.log(bag);
  console.log(mobile);
}
rajuBhaiya(100, "Bag", "Mobile");
function swapValues(value1, value2) {
  console.log("Before Swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swao", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("Kishor", "Hitesh");
swapValues("you", "Me");

console.log("---------------------------*******-------------------------");
console.log("1. function with no argument and no no return type");
function firstMsg() {
  console.log("I will try my best");
}
function secondMsg() {
  console.log("I will give my 100%");
}
firstMsg();
secondMsg();
console.log("---------------------------*******-------------------------");
console.log("2.Funnction with arguments but return any values ");
function personalDetails(firstName, lastName, schoolName) {
  console.log("My Name is", firstName);
  console.log("My surname is", lastName);
  console.log("My school name is", schoolName);
}
personalDetails("Varsha", "Jadhav", "KM High school and Jr collage Jath");
console.log("---------------------------*******-------------------------");
console.log("3. Function of swaping given values ");
function change(val1, val2) {
  console.log("Before exchange the values", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("After exchange the values", val1, val2);
}
change("Varsha", "Komal");
change(2000, 4000);
console.log("---------------------------*******-------------------------");
function add(num1, num2) {
  console.log("**--Addition--**");
  console.log(num1 + num2);
}
add(10, 20);
add("Komal", "Kamble");
console.log("---------------------------*******-------------------------");
console.log("---------------------------*******-------------------------");
console.log("---Assignment 1---");
function swapVal(no1, no2) {
  console.log("Before the swap the vlues", no1, no2);
  var temp = no1;
  no1 = no2;
  no2 = temp;
  console.log("After the swap the values", no1, no2);
}
swapVal("Sweety", "cutie");
console.log("---------------------------*******-------------------------");
function swapThree(firstNum, SecondNum, thirdNum) {
  console.log("Before the swaping thr numbers", firstNum, SecondNum, thirdNum);
  var temp = firstNum;
  firstNum = SecondNum;
  SecondNum = thirdNum;
  thirdNum = temp;
  console.log("After the swaping thr numbers", firstNum, SecondNum, thirdNum);
}
swapThree(100, 200, 300);
console.log("---------------------------*******-------------------------");
console.log("---------------------------*******-------------------------");
console.log("---Assignment 2---");
var bankName = "SBI Bank",
  marks = "90%",
  isworking = "false",
  totalcount = "107";
console.log("Bank Name:", bankName);
console.log("-------------------------");
console.log("Marks:", marks);
console.log("-------------------------");
console.log("Is working:", isworking);
console.log("-------------------------");
console.log("Total count:", totalcount);
console.log("-------------------------");


