// Functions constructor

/********* 
var john ={
    name:'John',
    yearOfBirth:1993,
    job:'teacher'
};

var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
        console.log(2016- this.yearOfBirth);
};

Person.prototype.lastName='Swith';

var john=new Person('John',1998,'teacher');
var mark=new Person('Mark',1979,'programmer');
var jane=new Person('Jane',1958,'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);
*/









/**********************
 * Object Create


var personProto={
    calculateAge:function(){
        console.log(2017- this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name="John";
john.yearOfBirth=1993;
john.job="teacher";

var jane=Object.create(personProto,
    {
        name:{value:'Jane'},
        yearOfBirth:{value:1969},
        job : { value: 'designer'}
    });
     */




/***************
 * 
 * Primitive vs Objects


//primitives
var a =23;
var b=a;
a=46;
console.log(a)
console.log(b);


// objects
var obj={
    name:'john',
    age:26
}
var obj2=obj;
obj.age=28;
console.log(obj.age);
console.log(obj2.age);

//function 
var age=27;
var obj={
    name:'jonas',
    city:'lisbon'
};

function change(a,b){
    a=38;
    b.city='San Francisco';
}

change(age,obj);

console.log(age); // 27
console.log(obj.city); // San Francisco

 */



/*********************
 * Lecture :Passing Functions as arguments 
 */


var years =[1990,1937,1987,2007];

function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(elt){
    return 2016- elt;
}


function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){

    if(el >= 18 && el<= 81){
         return Math.round( 206.9 - (0.67 * el));
    }else{
        return -1;
    }
}


var ages=arrayCalc(years,calculateAge);
var fullAges=arrayCalc(ages,isFullAge);
var rates=arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
