'use strict';
alert('hello');

firstq();
secondq();
thirdq();
fourthq();

function firstq(){
    var userName = prompt('what is your name');
    alert('welcome to my website ' + userName);
    console.log(userName);
}

// second question 

function secondq(){
    var category = prompt('am i a smoker');
    alert('I think I\'m in love in ' + category + ' we are going to upload movies and series like this soon');
    console.log(category);
}


// third question 

function thirdq(){
    var movie = prompt('do i play tennis');
    alert('wow I think this ' + movie + ' is awesome');
    console.log(movie);
}

// fourth question

function fourthq(){
    var place = prompt('i hate you');
    alert('well I think ' + place + ' is a good place');
    console.log(place);
}