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
 */


/*********************
 * Lecture :Arrow Functions 2
 * 
 */

// ES5

var box5={
    color:'green',
    position: 1,
    clickMe:function(){
        var self=this;
        document.querySelector('.green').addEventListener('click',function(){
            var str='this is box number' + self.position + 'and it is' +self.color;

            alert(str);
        })

    }

}

//box5.clickMe();



// ES6

var box6={
    color:'green',
    position: 1,
    clickMe:function(){
        document.querySelector('.green').addEventListener('click',()=>{
            var str='this is box number' + this.position + 'and it is' +this.color;

            alert(str);
        })

    }

}

//box6.clickMe();
/*
var box66={
    color:'green',
    position: 1,

    clickMe:()=>{
        document.querySelector('.green').addEventListener('click',()=>{
            var str='this is box number' + this.position + 'and it is' +this.color;

            alert(str);
        })

    }

}

box66.clickMe();

*/






function Person(name){
    this.name=name;
}
// ES5
Person.prototype.myFriends5=
function(friends){
    var arr=friends.map(function(el){
        return this.name + ' is friends with '+ el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob','Jane','Mark'];
new Person('John').myFriends5(friends);

//ES6

Person.prototype.myFriends6=
function(friends){
    var arr=friends.map(el =>
        `${this.name}  is friends with ${el}`);
    console.log(arr);
}


new Person('Mike').myFriends5(friends);