'use strict'

let userName =prompt('what\'s your name?');
alert('go ahead '+userName+ 'let\'s play a gussing game!');
alert('the score will appear after finish');


let story=prompt('Do you like reading stories?');
let winter=prompt('Do you like rain?');
let day=prompt("what's your faviourite day?");
let color=prompt("what's your faviourite color?");
let sport=prompt('Do you like playing basketball?');




let score=0;
function yesorno(){
if (story.toLowerCase()==='yes'||story.toLowerCase()==='y'){
    score=score+5;
}
if (winter.toLowerCase()==='no'||winter.toLowerCase()==='n'){
    score=score+5;
}
if (day.toLowerCase()==='yes'||day.toLowerCase()==='y'){
    score=score+5;
}
if(color.toLowerCase()==='yes'||color.toLowerCase()==='y'){
    score=score+5;
}
if (sport.toLowerCase()==='yes'||sport.toLowerCase()==='y'){
score=score+5;
} yesorno();
let guess=prompt('try to guess my age?');
function number(){
if (guess >=40){
    alert('the number of guessing is too high');
} else{
    alert('the number of guessing is too low');
}
}
}

console.log(score);
alert ('you score is '+ score);

let answer=['Cultural',' Camping','adventure','medical','cruise','international', 'buisness'];
let fun=prompt("what's types of tourism you prefer?");
function choose(){
for(let i =0; i<answer.length; i++){
if(fun.toLowerCase()==='cultural'|| fun.toLowerCase()==='advanture'|| fun.toLowerCase()=== 'buisness'){
    console.log(answer[i]);
     fun=prompt("try again?");
}
else {break;

    console.log(answer[i]);
    
}
}
}choose();
alert(answer[0]+'  '+ answer[2]+'  '+ answer[6]);