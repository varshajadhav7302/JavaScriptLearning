//Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - sunday

var daynumber = 4;
switch (daynumber) {
  case 1:
    console.log(`Today is Monday`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is Thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    break;
  default:
    console.log(`Not vaild number provided`);
    break;
}
console.log(`==========**Months**===========`)
var month;
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`The month is January`);
      break;
    case 2:
      console.log(`The month is February`);
      break;
    case 3:
      console.log(`The month is March`);
      break;
    case 4:
      console.log(`The month is April`);
      break;
    case 5:
      console.log(`The month is May`);
      break;
    case 6:
      console.log(`The month is June`);
      break;
    case 7:
      console.log(`The month is July`);
      break;
    case 8:
      console.log(`The month is August`);
      break;
    case 9:
      console.log(`The month is September`);
      break;
    case 10:
      console.log(`The month is October`);
      break;
    case 11:
      console.log(`The month is November`);
      break;
    case 12:
      console.log(`The month is December`);
      break;
    default:
        console.log(`Plz enter the vaild number`);
      break;
  }
}
monthOfYear(100);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(1);
