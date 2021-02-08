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

story=story.toLowerCase();
winter=winter.toLowerCase();
day=day.toLowerCase();
color=color.toLowerCase();
sport=sport.toLowerCase();

if (story==='yes'){
    score=score+5;
}
if (winter=== 'yes'){
    score=score+5;
}
if (day=== 'yes'){
    score=score+5;
}
if(color==='yes'){
    score=score+5
}
if (sport==='yes'){
score=score+5;
}
console.log(score);


/*switch(story){
        case true:
            document.write('');
           break;
       case false:
           document.write('I hope you get better');
             break;
console.log(fruit.toUpperCase());*/
