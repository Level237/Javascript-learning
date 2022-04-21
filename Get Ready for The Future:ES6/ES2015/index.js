// Lecture :let and const

/*
// ES5

var name5= 'James Swith'
var age5= 23;
name5= 'Jane Hiller';
console.log(name5);

// ES6
const name6= 'Jane Swith';
let age6= 23;
name6='Jane Miller';
console.log(name6)

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName='John';
        var yearOfBirth=1998;
    }
    console.log(firstName + ' , born in ' + yearOfBirth + ' is now officially allowed to drive a car.')
}

driversLicence5(true)

//ES6

function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth=1997;
    if (passedTest) {
        firstName='John';
        

    
    }
    console.log(firstName + ' , born in ' + yearOfBirth + ' is now officially allowed to drive a car.')
}
driversLicence6(true)

*/







/*********************
 * Lecture :Blocks and IIFEs


{
    const a = 1;
    let b = 2;
    var c=3;
}

//console.log(a + b);
console.log(c);
// ES5

(function(){
    var c=3;
})();

//console.log(c);

 */

/********************
 * 
 * Lecture :Strings


let firstName='John';
let lastName='Swith';
const yearOfBirth=1998;

function calcAge(year){
    return 2016 - year;
}

// ES5
console.log('This is' + firstName + ' ' +lastName + '- He was born in' + yearOfBirth + '. Today he is '+ calcAge(yearOfBirth) +'years old');

//ES6
console.log(`This is ${firstName} ${lastName}. he was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n=`${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'))
console.log(n.includes('oh'))
console.log(`${firstName } ` .repeat(5) );

 */

/*******************
 * Lecture :Arrow functions
 */


const years =[1990,1965,1982,1937];

//ES5

var age5=years.map(function(elt){

    return 2018 -elt;
})

console.log(age5);

//ES6

let  age6=years.map(elt => 2016 - elt);

console.log(age6);

age6=years.map((elt,index)=>`Age element ${index + 1}: ${2016 - elt}.`);

console.log(age6)


age6=years.map((elt,index) =>{
    const now =new Date().getFullYear();
    const age =now -elt;

    return `Age element ${index + 1}: ${2016 - elt}.`;
})

console.log(age6)