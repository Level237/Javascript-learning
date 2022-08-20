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
 */











/************************** 
 * 
 * 
 *Lecture:Destructurings


// ES5

var john=['John', 26];
//var name=john[0];
var age=john[1];

//ES6
const [named,year]=['john',26];
console.log(named);
console.log(year);

const obj={
    firstName:'John',
    lastName: 'Swith'
};

const {firstName,lastName}=obj;

console.log(firstName);
console.log(lastName);

const {firstName:a,lastName:b}=obj; 

console.log(a);
console.log(b);





function calcAgeRetirement(year){
    const age=new Date().getFullYear() - year;

    return [age,65 -age];
}


const [age2,retirement]=calcAgeRetirement(1990);
console.log(age2);
console.log(retirement)
*/





/***********
 * Lecture :Arrays


const boxes =document.querySelectorAll('.container');

//ES5

var boxesArr5=Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(curr){
    curr.style.backgroundColor ='dodgerblue';
})


//ES6
const boxesArr6 =Array.from(boxes);
Array.from(boxes).forEach(curr =>
    curr.style.backgroundColor ='dodgerblue');
    

// ES5
/*
for(var i=0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className=== 'container blue'){
        continue;
    }

    boxesArr5[i].textContent='I changed to blue';
}



// ES6

for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }

    cur.textContent='I changed to blue';
}


// ES5

var ages =[12,18,5,15,11,14,22];

var full=ages.map(function(curr){
    return curr >=18;
})

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)])


// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(curr => curr >= 18));

 */












/*****************
 * Lecture:Spread operator


function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1=addFourAges(10,39,12,3);
console.log(sum1);

//ES5

var ages=[10,39,12,3];
var sum2=addFourAges.apply(null,ages);
console.log(sum2);

//ES6
const sum3=addFourAges(...ages);
console.log(sum3)

const familySwith=['John','Jane','Mark'];
const familyMiller=['Mary','Bop','Ann'];
const bigFamily=[...familySwith,...familyMiller];
console.log(bigFamily);


const h=document.querySelector('h1');
const boxes=document.querySelectorAll('.container')
const all=[h,...boxes];

Array.from(all).forEach(curr =>
    curr.style.color='purple');
 */





    /***************
     * Lecture :Rest Paramaters


// ES5
function isFulAge5(){
    //console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}

//isFulAge5(1990,1999,1965);


// ES6

function isFulAge6(...years){
    years.forEach(curr => console.log((2016 - curr) >= 18));
}
isFulAge6(1990,1999,1965);



function isFulAge5(){
    //console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}

//isFulAge5(1990,1999,1965);


// ES6

function isFulAge6(limit,...years){
    years.forEach(curr => console.log((2016 - curr) >= limit));
}
isFulAge6(16,1990,1999,1965);

     */








/*************
 * 
 * Lecture:Default parameters

// ES5
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    lastName===undefined ? lastName='Smith':lastName=lastName;
    nationality===undefined ? nationality="American" : nationality=nationality;  
    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.nationality=nationality;
}


//ES6
function SmithPerson(firstName,yearOfBirth,lastName='smith',nationality="American"){
    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.nationality=nationality;
}

var john=new SmithPerson('John',1990)

 */












/*******
 * Lecture:map



const question=new Map();
question.set('question','What is the official name of the lateste major javascript version?');
question.set(1,"ES5");
question.set(2,"ES6");
question.set(3,"ES2015");
question.set(4,"ES7");
question.set("correct",3);
question.set(true,"correct answer:D");
question.set(false,"wrong,please try again:")

console.log(question.get('question'));
console.log(question.size)

if(question.has(4)){
    //question.delete(4);
    //console.log("answer 4 is here")
}
//question.clear();
/*
question.forEach((curr,key)=>
console.log(`This is ${key},and it's set to ${curr}`))



for (let [key,value] of question.entries()){
    if(typeof(key)==="number"){
        console.log(`Answer ${key}:${value}`)
    }
}

const ans=parseInt(prompt("Write the correct answer"))

console.log(question.get(ans===question.get('correct')));
*/






 /************
  * Lecture:Classes
  

 // ES5

 var Person5=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
 }

 Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear -this.yearOfBirth;
    console.log(age);
 }

 var john5=new Person5('john',1998,"teacher");

 // ES6

 class Person6{

    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge(){
        var age=new Date().getFullYear -this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey There!')
    }
 }
 
 const john6=new Person6("john",1998,"teacher");

 Person6.greeting();
*/





/*************
 * Lecture:Classes and Subclasses


 var Person5=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
 }

 Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear() -this.yearOfBirth;
    console.log(age);
 }


    var Athete5=function(name,yearOfBirth,job,olympicGames,medals){
        Person5.call(this,name,yearOfBirth,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
 }
 Athete5.prototype=Object.create(Person5.prototype);

 Athete5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals);
 }



 var johnAthlete5=new Athete5("John",1990,'Winner',3,10);

 johnAthlete5.calculateAge();
 johnAthlete5.wonMedal();


 // ES6

 class Person6{

    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge(){
        var age=new Date().getFullYear() -this.yearOfBirth;
        console.log(age);
    }

 }

 class Athete6 extends Person6{
    constructor(name,yearOfBirthn,job,olympicGames,medals){
        super(name,yearOfBirthn,job);

        this.olympicGames=olympicGames;
        this.medals=medals
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
 }

 const johnAthlete6=new Athete6("John",1980,"swimmer",3,10);

 johnAthlete6.wonMedal();
 johnAthlete6.calculateAge();

  */

/******
 * Cooding chalenge
 * 
 * Suppose that you're working in a swall town administration,
 * and you're in charge of two town elements:
 * 1- Parks
 * 2-Streets
 * 
    It's a very small town,so right now there are only 3 parks and 4 streets.All parks
    and streets have a name and a build year.

    At an end-of-year meeting,your boss wants a final report with the following:
    1- Tree density of each park in the town (forumla:number of trees/park area)
    2- Average age of each town's park(forumla:sum of all ages/number of parks)
    3- Thr name of the park that has more than 1000 trees
    4-Total and average length of the town's streets
    5- Size classification of all streets: tiny/small/normal/big/huge.If the size is unknown,the default is normal

    All the report data should be printed to the console.

    Hint:Use some of the ES6 features:classes,subsclasses,template strings,default 
    parameters,maps,arrow functions,
    */









