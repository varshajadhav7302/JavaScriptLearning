var num;
console.log("1). Write a function Expression to get square of the number. ")
function square(num){
    console.log("The square of ",num,"=",num*num)
}
square(15);
square(37);
square(230);
console.log("---------*****----------")
console.log("2). Check and log type of function ")
console.log("The type of square is :",typeof square);
console.log("---------*****----------")
var area=function(l,w){
    console.log("The height is",l,"and width is",w);
    var a=l*w;
    console.log("The area of rectangle is:",a,"sq");
}
var a=area(20,40);
console.log("---------*****----------")
console.log("3). ")
var swapValues=function(val1,val2){
    console.log("Befor the swaping:",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After the swaping:",val1,val2);
}
var temp= swapValues("Virat", "Anushka");
var temp= swapValues('1000','2000'); 
console.log("---------*****----------")
var sentance="JS the most popular language";
console.log("A.The sentace is :-",sentance);
console.log("B.Total character avaiable in the string is:",sentance.length);
console.log("C.Charcter at index 6 is:",sentance.charAt(6));
console.log("D.Charcter at index 6 is:",sentance.charAt(11));
var lengthtotal=sentance.length;
console.log("E.The last charcter in the string",sentance.charAt(lengthtotal-1));
console.log("F.The first charcter in the string is:",sentance.charAt(0));
console.log("G.The lenght of the string is:",sentance.length,"& square of the length is :",sentance.length*sentance.length);