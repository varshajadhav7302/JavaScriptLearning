var sentence = "Yes Just do it man, I know you can";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  //var charcopy = sentence.toLowerCase();
  if (
    char == "a" ||
    char == "A" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    console.log(char);
    counter = counter + 1;
  }
}
console.log(`Total vowels in string is : ${counter}`);

var reversestring = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reversestring = reversestring.concat(char);
  //console.log(char);
}
console.log(reversestring);

//print 5 1000
var counter = 1;
for (i = 0; i <= 100; i++) {
  console.log("5");
}

var sentence = "Yes Just do it man, I know you can";
// initi   cond  update
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  // console.log(char);
}
console.log(reverseString);


function countChar1(string1){
    console.log(string1);
    var counter = 0;
    for(let index = 0; index < string1.length; index++){
        
        var char = string1.charAt(index);
       
        if(char == 'a' || char == 'A'){
            //console.log(char);
            counter = counter + 1;
        }
    }
    console.log(`The a & A in the string1 is : ${counter}`);
}

countChar1("I Am Learning Javascript, The Language of internet");
countChar1("My favourite movie is LAggAn")
