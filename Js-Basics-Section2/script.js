/*****************************
 * Variables and data types
 * 
 * var firstName='John';

console.log(firstName);

var lastName='swith';
var age=20;
var fullAge=true;

console.log(fullAge);

var job;
console.log(job); 

var _3years=3;
console.log(_3years)
 */

/**********************************
 * Variable mutation and type coercion
 

var firstName='john';
var age=28;

//Type Coercion
console.log(firstName +' '+age);

var job,isMarried;
job='teacher';
isMarried=false;

console.log(firstName + ' is a '+ age +' year ols'
+ job + 'Is he Married?' +isMarried);

//Variable mutation 

age='twenty eight';

job='driver';

//alert(firstName + ' is a '+ age +' year ols'+ job + 'Is he Married?' +isMarried);

var lastName=prompt('what is his last Name?');
console.log('firstName'+' '+lastName);

*/

/**
 * 
 * Basic Operators

var year,yearJohn,yearMark;
now=2018;
ageJohn=28;
ageMark=33
// Math Operator
yearJohn=now -ageJohn;
yearMark= now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now + 2);
console.log(now / 10);

//logical Operators
var johnOlder=ageJohn<ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ageMark);
console.log(typeof 'Mark is older the John');
var x;
console.log(typeof x);

/***********************************
 * 
 * Operator precedence


var now =2018;
var yearJohn=1989;
var fullAge= 18;

var isFullAge=now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn =now -yearJohn;
var ageMark=35;
var average=(ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x=y=(3+5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
console.log(x,y);


// More Operators
x*=2;
console.log(x);
x+= 10;
console.log(x);
x--;
console.log(x);
 */
/******************* 
 * 
 * Coding CHalenge 1


var massMark=78; // kg
var heightMark=1.69; //meters

var massJohn = 92;
var heihtJohn =1.95;

var BMIMark= massMark / (heightMark * heightMark);
var BMIJohn=massJohn / (heihtJohn * heihtJohn);
console.log(BMIMark,BMIJohn);

var markHighrtBMI= BMIMark > BMIJohn;
console.log('is Mark\'s BMI higher than John\'s ? '+ markHighrtBMI)



*/
/****************
 * If /else statements



var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName +'is married');
}
else{
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried= true;
if(isMarried){
    console.log(firstName +'is married');
}
else{
    console.log(firstName + ' will hopefully marry soon');
}

var massMark=78; // kg
var heightMark=1.69; //meters

var massJohn = 92;
var heihtJohn =1.95;

var BMIMark= massMark / (heightMark * heightMark);
var BMIJohn=massJohn / (heihtJohn * heihtJohn);

if(BMIMark > BMIJohn){
    console.log('Mark is higher than John')
}
else{
    console.log('John is higher than Mark')
}
//var markHighrtBMI= BMIMark > BMIJohn;
//console.log('is Mark\'s BMI higher than John\'s ? '+ markHighrtBMI)

 */




/**************************
 * Boolean Logic


var firstName= 'john';
var age=16;

if(age<13){
    console.log(firstName + 'is a boy');
}else if(age>=13 && age < 28){
    console.log(firstName + ' is a teenager')
} // Between 13 and 20 === age >=13 AND age <28

else{
    console.log(firstName + 'is a man');
}
 */

/**************************************
 * Truthy and falsy values and equality operators


var height;
height=23; 
if(height || height === 0){
    console.log('variable is defined');
}else{
    console.log('variable has not been defined');
}

// Equality operators

if(height == '23'){
    console.log('The == operator does type coercion!');
}
 */

/**************************
 * Coding Chalenge 2
 * 

var scoreJohn= (110+120+103)/3;
var scoreMike=(116 + 94 +123)/3;
var scoreMary= (97+134 +105)/3;

console.log(scoreJohn,scoreMike,scoreMary);

if(scoreJohn > scoreMary && scoreJohn > scoreMary){
    console.log('John team wins'+ scoreJohn + 'points')
}else if(scoreMike >scoreJohn && scoreMike> scoreMary){
    console.log('Mike team wins'+ scoreMike + 'points')
}
else if(scoreMary >scoreJohn && scoreMary> scoreMike)
{
    console.log('Mary team wins'+ scoreMary + 'points')
}
/*if(scoreJohn > scoreMike){
    console.log('John team wins'+ scoreJohn + 'points')

}else if(scoreMike > scoreJohn){
    console.log('Mike team wins'+ scoreMike + 'points')
}
else{
    console.log('there is a draw');
}
*/


/*************************
 * Functions


function calculateAge(birthYear){

    return 2018 -birthYear;
}

var ageJohn=calculateAge(1990);
var ageMike=calculateAge(1948);
var ageJane=calculateAge(1969);
console.log(ageJohn,ageJane,ageMike);

function yearsUntiRectirement(year,firstName){
    var age=calculateAge(year);
    var retirement=65 - age;
    if(retirement >0){
        console.log(firstName + ' retires in '+ retirement + ' years.')
    }else{
        console.log(firstName + ' is already retired');
    }
    
}

yearsUntiRectirement(1990,'john');
yearsUntiRectirement(1948,'Mike');
yearsUntiRectirement(1969,'jane');
 */



/**************************************
 * Function Statements and Expressions


// function declaration
// function whatDoYouDo(job ,firstName){}

//function expression
var whatDoYouDo =function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in lisbon';
        case 'designer':
            return firstName + ' design beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));
 */



/***********************
 * Arrays


// Initialise new Array
var names =['John', 'Mark','Jane'];
var years = new Array(1999,1969,1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1]='Ben';
names[names.length]='Marry';
console.log(names);

// Different data types
var john =['John','smith',1990,'teacher',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner=john.indexOf('designer') > 0 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
 */

/**************************
 * Coding Chalenge 3


function tipCalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else{
        percentage= .1;
    }
    return percentage * bill;
}

var bills=[124,48,268];
var tips=[tipCalculator(bills[0]),
        tipCalculator([bills[1]]),
        tipCalculator([bills[2]])];

var finalValues =[bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];
console.log(tips,finalValues);
 */









/******************************
 * Objects and properties

// Object Literal
var john= {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1990,
    familly:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false
};
console.log(john.firstName);
console.log(john['lastName']);
var x='birthYear';
console.log(john[x]);

john.job='designer';
john['isMarried']=true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name='Jane';
jane.birthYear=1969;
jane['lastName']='Smith';
console.log(jane);
 */

/****************************
 * Objects and methods


var john= {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1992,
    familly:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    calcAge:function(){
        this.age= 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
 */


/********************************
 * Coding Chalenge 4
 */

/*
Let"s remember the firdt coding challenge where Mark 
and John compared their BMIS.Let's now implement the 
same functionnality with objects and methods.
1- For each of them ,create an object with properties
for their full name,mass and height
2- Then,add a method to each object to calculate the BMI
.Save the BMI to the object and also return it from the 
method.
3- In the end , log to the console who has the highest BMI,together
with the full name and the respective BMI. Don't forget might have 
the same BMI.



var mark ={
    name:'mark',
    mass:78,
    height:1.69,
    calcBmi:function(){
        this.BMI=this.mass/(this.height *this.height);
    }
};

var john={
    name:'john',
    mass:92,
    height:1.95,
    calcBmi:function(){
        this.BMI=this.mass/(this.height * this.height);
    }
}
mark.calcBmi();
john.calcBmi();
console.log(mark,john);

var markBmiAndJohn= john.BMI > mark.BMI ? 'john has a BMI\'s great than mark' : 'mark has a BMI\'s great than John';

console.log(markBmiAndJohn);
*/



/*****************************
 * Loops and iteration

for(var i=0;i <= 20; i+=2){
    console.log(i);
}

var john =['john','Smith',1990,'designer',false];

for(var i=0;i<john.length;i++){
    console.log(john[i]);
}
*/

// continue and break statements
var john =['john','Smith',1990,'designer',false];

for(var i=0;i<john.length;i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for(var i=john.length -1;i>=0;i--){
    console.log(john[i]);
}