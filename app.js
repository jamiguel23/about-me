'use strict';

//console.log('Hello World');

let username = prompt('what is your name?');
alert('Welcome ' + username + '! Please answer the following five questions yes/no or y/n');

let answerOne = prompt('Do I like peanuts?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  //console.log('you are correct! I like peanuts');
  alert('you are correct! I like peanuts');
}

let answerTwo = prompt('Do I live in South Dakota?').toLowerCase();

if(answerTwo === 'no' || answerTwo === 'n'){
  //console.log('Also correct, no one lives there');
  alert('Also correct, no one lives there');
}

let answerThree = prompt('Do I wish I was a Narwhal?').toLowerCase();

if(answerThree === 'yes' || answerThree ==='y'){
  //console.log('answerThree: ' + answerThree);
  alert('yes, I want to be a Narwhal');
}

let answerFour = prompt('Do I have a pet fish?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  //console.log('I do have a pet fish. His name is Squirt')
  alert('I do have a pet fish. His name is Squirt');
}

let answerFive = prompt('Have I ever tried green egss and ham?').toLowerCase();

if(answerFive === 'no' || answerFive === 'n'){
  //console.log('answerFive: ' + answerFive);
  alert('Correct, I have never tried green egss and ham');
}

alert('Thank you ' + username + ' for answering those five About Me guessing game questions!');
