console.log("=========concat==========");
var firstname="Mohit";
var lastname="Sharma";
//Concatenation using + operator
var result=firstname + lastname;
console.log("Concatenation using + operator:",result);
var result=firstname.concat(lastname);
console.log("Concatenation using concat():",result);

var greet="Good Morning";
var indexOf=greet.indexOf("M");
console.log("Index of character M:",indexOf);
 
var indexOfNin=greet.indexOf("nin");
console.log("Index of substring nin:",indexOfNin);

var greet="Good Morning";
var greetAfterReplace=greet.replace("Morning","Afternoon");
console.log("Replace substring Morning with Afternoon:",greetAfterReplace);

console.log(greet.replace("Mor","Eve"));

console.log(greet.toUpperCase());
console.log(greet.toLocaleLowerCase());

var greet="   Good Morning   ";
console.log("Length",greet.length);
var resultTrim=greet.trim();
console.log("Trim():",resultTrim,"Length:",resultTrim.length);
//greet.trimEnd
console.log("Include()",greet.includes("Good"));
//var str="hellodev!";

var greet="Good Morning";
var resultslice=greet.slice(0,4);
console.log("Slice method",resultslice);
console.log("Slice() with start index", greet.slice(4));
console.log("Slice with - index",greet.slice(-7));
console.log("Slice with negative start and index:", greet.slice(-7,-2));

var studList="Dips|Jenny|Ganni|Manni|Shani";
var studListSplit=studList.split("|");
console.log("Student list after split by char ,",studListSplit);
console.log("total number studenys:",studListSplit.length);

var sentance="Yes you can do it guys, just keep learning and practising as well";
var wordsInSentance=sentance.split("");
console.log("Total wors in the sentance string is :",wordsInSentance.length);

console.log(`Yes you can do it "Sanket"`);

var firstName="Mohit";
var lastName="Sharma";
console.log("First name is",firstName,"Last name is",lastName);

console.log(`first name is:${firstName}`,`Last name is:${lastName}`);



console.log("---------*******-------");
console.log("---Assignment 1---");
var sentance= "Codemind";
console.log( `My dream company is "${sentance}"`);
var hobby1="Dancing";
var hobby2="Coding";
var hobby3="WatchingMovies";
console.log(`My hobbies is ${hobby1} ${hobby2} ${hobby3}`);
var stringTemplateAsign=hobby1+hobby2+hobby3;
console.log("Using concat:",stringTemplateAsign)

console.log("---------*******-------");
console.log("---Assignment 2---");

var line="     Hey you are doing good, keep it up     ";
console.log(` 1. The string is : ${line}`);
var stringHandsOn=line;
console.log(" 2. The lenght of the string is:",line.length);
var resultTrim=line.trim();
console.log("3. After removing extra spaces: ",resultTrim);
var lineLengthBefore=line.length;
var lineLengthAfter=resultTrim.length;
var stringcount=lineLengthBefore-lineLengthAfter;
console.log("4. the count of extra spaces removed is:",stringcount);
console.log("5. The first charcyer of string is: ",resultTrim.charAt(0),"and The last charcter of the string is:",resultTrim.charAt(lineLengthAfter-1))
var wordList = "Hey|you|are|doing|good,|keep|it|up";
var wordListSplit = wordList.split("|");
console.log(`6. Total words in string are : `, wordListSplit.length);
console.log(`7. The index of "Good" is:,resultTrim.lastIndexOf("good")`);
var result1 = resultTrim.substring(22);
console.log(`8. Substring starting from index 22 (Substring) :`,result1);
var result2 = resultTrim.slice(22);
console.log(`   Substring starting from index 22 (Slice)     :`,result2);
console.log(`9. is string end with "up" after step 3 :`,resultTrim.endsWith('up'));
console.log(`10. is string Starts with "hey" after step 3 :`,resultTrim.startsWith('Hey'));

