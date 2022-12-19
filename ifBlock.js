console.log(`              =========**Assignment**========`);
console.log(`=====1. Check the people are eligible for voting.=====`);
function votingEligiblity(age){
    console.log(`* Age is : ${age}`);
var v = age > 18 || age< 0 ? `Congratulation, you are eligible for voting`: `In valid data, Plz entre a correct age.`;
console.log(`${v}`);
}
votingEligiblity(45);
votingEligiblity(17);
votingEligiblity(8);
votingEligiblity(20);
votingEligiblity(0);
function votingEligiblity1(age){
    console.log(`* Age is : ${age}`);
var v1 = age < 0 || age > 120 ? `In valid data, Plz entre a correct age.`: `In valid data, Plz entre a correct age.`;
console.log(`${v1}`);
}
votingEligiblity1(-10);
votingEligiblity1(200);

console.log(`==============***********===========`);
console.log(`======2. Checking marks and grade====`);
function marksGrade(mark){
    console.log(`* Mark is : ${mark} `);
    if(mark <= 0){
        console.log(`Please provide the valid marks `);
    }
    else if(mark <=100 && mark >=90){
        console.log(`Funtastic marks  ${mark}, Your garde is "A+"`);
    }
    else if(mark < 90 && mark >=75){
        console.log(`Excellant marks ${mark}, Your garde is "A"`);
    }
    else if(mark < 75 && mark >=50){
        console.log(`Good marks ${mark}, Your garde is "B"`);
    }
    else if(mark < 50 && mark >=35){
        console.log(`Good marks ${mark}, Your garde is "C", Need improvement`);
    }
    else if(mark > 100){
        console.log(`Please provide the valid marks `);
    }
   else{
    console.log(`Sorry, Plz entre correct marks again`);
   }
}
marksGrade(98);
marksGrade(80);
marksGrade(90);
marksGrade(0);
marksGrade(150);
marksGrade(-7);
marksGrade(35);
marksGrade(29);
marksGrade(64);
marksGrade(49);