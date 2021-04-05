'use strict';
let answer = prompt('Guess by ansewer yes or no do i like programming');
answer = answer.toLowerCase();
switch(answer){
case 'yes':
case 'y' :
  alert('Actually i LOVE programmin not just like it');
  break;
case 'no':
case 'n':
  alert('The programming is a futer languag how dont like it') ;
  break;
case 'maybe':
  alert('your donot now me sure');
  break;
default:
  alert('you dont like yes or no Qustion as me');

}

let answer1 = prompt('Guess by ansewer yes or no do i wont to be agreat Developer in sha\'a allh');
answer1 = answer1.toLowerCase();
switch(answer1){
case 'yes':
case 'y' :
  alert('Actually i will work harde to be in sha\'a allh');
  break;
case 'no':
case 'n':
  alert('our profit mohammad love the optimastic so be optomastic') ;
  break;
case 'maybe':
  alert('work harde then say ya allh');
  break;
default:
  alert('our profit say اعقل وتوكل');
}
let answer2 = prompt('Guess by ansewer yes or no do i like to help others');
answer2 = answer2.toLocaleLowerCase();
switch(answer2){
case 'yes':
case 'y' :
  alert('help other make you happy');
  break;
case 'no':
case 'n':
  alert('our old pepole saed لان امشي مع اخ لي في حاجه خير من صيام سنة وقيامها>من يغفل عن هذا الاجر') ;
  break;
case 'maybe':
  alert('your donot now me sure');
  break;
default:
  alert('you dont like yes or no Qustion as me');
}

let answer3 = prompt('Guess by ansewer yes or no do i hit Animals');
answer3 = answer3.toLocaleLowerCase();
switch(answer3){
case 'yes':
case 'y' :
  alert(' NO The Cates very kute animal');
  break;
case 'no':
case 'n':
  alert('Actually i LOVE Cates and we have one') ;
  break;
case 'maybe':
  alert('your donot now me sure');
  break;
default:
  alert('you dont like yes or no Qustion as me');
}

let answer4 = prompt('Guess by ansewer yes or no do i Slow with right programes');
answer4 = answer4.toLocaleLowerCase();
switch(answer4){
case 'yes':
case 'y' :
  // eslint-disable-next-line no-case-declarations
  let helpFedbake= prompt(' how i can be faster in right prorames');
  console.log(helpFedbake);
  break;
case 'no':
case 'n':
  alert('Thank you for your complement') ;
  break;
case 'maybe':
  alert('your donot now me sure');
  break;
default:
  alert('you dont like yes or no Qustion as me');
}

let userName = prompt('what is your name');
alert('Wlecom have agood time' + userName );
