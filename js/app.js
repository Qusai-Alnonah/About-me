'use strict';
let score =0;
let userName = prompt('what is your name');
alert('Wlecom Now We START Game\'' + userName );

let answer = 'null';
function question1(){
answer = prompt('Guess by ansewer yes or no do i like programming');
answer = answer.toLowerCase();
switch(answer){
case 'yes':
case 'y' :
  score++;
  alert('Actually i LOVE programmin not just like it');
  //console.log(answer);
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
}
question1();

let answer1 = 'null';
function question2(){
  answer1 = prompt('Guess by ansewer yes or no do i wont to be agreat Developer in sha\'a allh');
answer1 = answer1.toLowerCase();
switch(answer1){
case 'yes':
case 'y' :
  alert('Actually i will work harde to be in sha\'a allh');
  score++;
  //console.log(answer1);
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
}
question2();

let answer2 = 'null';
function question3(){
answer2 = prompt('Guess by ansewer yes or no do i like to help others');
answer2 = answer2.toLocaleLowerCase();
switch(answer2){
case 'yes':
case 'y' :
  score++;
  alert('help other make you happy');
  //console.log(answer2);
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
}
question3();

let answer3 = 'null';
function question4(){
 answer3 = prompt('Guess by ansewer yes or no do i hit Animals');
answer3 = answer3.toLocaleLowerCase();
switch(answer3){
case 'yes':
case 'y' :
  alert(' NO The Cates very kute animal');
  //console.log(answer3);

  break;
case 'no':
case 'n':
  score++;
  alert('Actually i LOVE Cates and we have one') ;
  break;
case 'maybe':
  alert('your donot now me sure');
  break;
default:
  alert('you dont like yes or no Qustion as me');
}
}
question4();

let answer4 = 'null';
function question5(){
 answer4 = prompt('Guess by ansewer yes or no do iam Slowly with right programes');
answer4 = answer4.toLocaleLowerCase();
let helpFedbake ='user fedbacke';
switch(answer4){
case 'yes':
case 'y' :
  helpFedbake = prompt(' how i can be faster in right prorames');
  score++;
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
}
question5()

let answer5='';
for( let i=0 ; i <= 3&&!(answer5===27);i++ ){
  let answer5 = prompt('Guess how old am i from 10-30 ');
  answer5= parseInt(answer5);
  if(answer5 === 27){
    score++;
    alert('Correct answer this my age');
    break;
  }else if(answer5 <= 10){
    alert('you are too low');
  // }else if (30 >answer5 >= 15 ){
  //   alert('you are so close');
  }else if(answer5 >= 30 ){
    alert('you are too high');
  }
  if(answer5 !== 27 && i >=4){
    alert('the Correct answer is 27');
  }
}alert('the Correct answer is 27');
console.log(helpFedbake);





let color = ['blue', 'green', 'red', 'orange', 'black', 'white', 'yellow' ];
alert (color);
let answer6 = prompt('Guess what is my favarite color');
answer6 = answer6.toLocaleLowerCase();
for( let i=0 ;(i <=5 &&!(answer6 ==='white') ) ; i++){

  switch(answer6 ){
  case 'white':
    score++;
    break;

  default:
    alert('wrong asnwer try again');
    answer6 = prompt('try anther');
  }
}
if(answer6 === 'white'){
  alert('great job this is right' + 'correct answer' );
}
if(answer6 !== 'white'){
  alert('the right answer is white');
}
alert('Your score is' + score);
alert('Have agood time in the Website');

//END OF CODE

// {break;}
// if(answer6 !== 'white'){}
//case'answer6 !== white':

// let j = Int ;
// for (i=0 ;10<=j<=20 ;i++){
//   alert('you are too low');



// switch(answer5){
//   case ''

// }

//  if(answer6 ==="white"){
//    alert('great job that\'s right');
//  }else if




//  let helpFedbake ='user fedbacke';

//  switch(answer6){
//  case 'yes':
//  case 'y' :
//    helpFedbake = prompt(' how i can be faster in right prorames');
// break;
//  case 'no':
//  case 'n':
// alert('Thank you for your complement') ;
//    break;
//  case 'maybe':
//    alert('your donot now me sure');
//    break;
//  default:
//    alert('you dont like yes or no Qustion as me');
// }
//  alert('Have agood time in the Website');



//  answer5 = answer5.toLowerCase();
//  switch(parseInt (answer5)){
//  case 'yes':
//  case 'y' :
//    alert('Actually i LOVE programmin not just like it');
//    //console.log(answer);
//    break;
//  case 'no':
//  case 'n':
//   alert('The programming is a futer languag how dont like it') ;
//    break;
//  case 'maybe':
//   alert('your donot now me sure');
//    break;
//  default:
//    alert('you dont like yes or no Qustion as me');

// colors = new Color[6];
// colors[0] = new Color(Color.red);
// colors[1] = new Color(Color.blue);
// colors[2] = new Color(Color.yellow);
// colors[3] = new Color(Color.green);
// colors[4] = new Color(Color.white);
// colors[5] = new Color(Color.black);
// let colorLike =[red,blue,white,black,yallow,green];
// Color[] colors;


