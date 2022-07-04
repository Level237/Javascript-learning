/************************************************************* 
 * Lecture:hoiting


// functions
calculateAge(1990);  

function calculateAge(year){
    console.log(2018 - year);
}
//retirement(1999);
var retirement=function(year){
    console.log(65- (2016 - year));
}


// variables

console.log(age);
var age= 23;

function foo(){
    console.log(age);
    var age= 65;
    console.log(age);
}

foo();
console.log(age);
*/







// First scoping example

var a = 'Hello';

first();

function first(){
    var b= 'Hi';
    
    second();

    function second(){
        var c='Hey';
        third(); 
    }
}

function third(){
    var d='John';
    //console.log(c);
    console.log(a + d);
}




