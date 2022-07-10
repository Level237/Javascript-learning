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
 */


/************************
 * Lecture:Functions returning functions


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', Can you please explain what UX design is?')
        }
    }else if(job === 'teacher'){

        return function(name){
            console.log('What subject do you teach ,' +name+'?');
        }
    }else{

        return function(name){
            console.log('Hello what do you do?');
        }
    }

}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('martin');

interviewQuestion('teacher')('mark');
 */





/**************************
 * Lecture :IIFE
 */

/** 
function game(){
    var score =Math.random()*10;
    console.log(score >= 5);
}
game();


(function(){
    var score =Math.random()*10;
    console.log(score >= 5)
})();

//console.log(score);


(function(goodluck){
    var score =Math.random()*10;
    console.log(score >= 5 - goodluck)
})(5);
*/



/***********
 * Lecture :Bind call and apply
 * 



var john ={
    name:'john',
    age:26,
    job:'teacher',
    presentation:function(style,timeOfDay){
        if(style === 'formal'){
            console.log('good morning '+timeOfDay+
            ',ladies and gentlement! I\'m ' +this.name+' I\'m a ' +this.job
            +' and I\'m '+this.age+ 'years old.');
        }else if(style==='friendly'){
            console.log('Hey What\' s up? I\'m ' +this.name+' I\'m a ' +this.job
            +' and I\'m '+this.age+ 'years old.Have a nice'+timeOfDay+'.');
        }
    }
}
var emily={
    name:'Emily',
    age:35,
    job:'designer'
}

john.presentation('formal','morning');

john.presentation.call(emily,'friendly','afternoon');

//john.presentation.apply(emily,['friendly','afternoon'])

var johnFriendly=john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night'); 

var emilyFormal=john.presentation.bind(emily,'formal');
emilyFormal('afternoon');


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



function isFullAge(limit,el){
    return el>=limit;
}

var ages=arrayCalc(years,calculateAge);
var fullJapan= arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
 * *************/












/***************************************
 * Coding Chalenge 7
 * 
 * 
 * 
 * 
 * -----------Let's build a fun quizz game in the console!-----
 * 
 * 1. Build a function constructor called Question to describe a question. A question should include:
 * a) Question itself
 * b)the answers from which the player can choose the correct one (choose an adequate data structure here,
 * array,object,etc..)
 * c)Correct answer
 * 
 * 2. Create a couple of questions using the constructor
 * 
 * 3.Store them all inside an array
 * 
 * 4.Select one random question and log it on the console,together with the possible answers (each
 * questios should have a number) (Hint: write a method for the questions objects for this task).
 * 
 * 5.Use the 'prompt' function to ask the user for the correct answer.The user should input the number of
 * the correct answer such as you displayed it on task 4.
 * 
 * 6. Check if the answer is correct and print to the console whether the correct ot nor (Hint:
 * write another method for this).
 * 
 * 7. Suppose this code would be a plugin for other programmers to,use in their code.So make sure that all 
 * your code is private and doesn't interface with the other programmers code( Hint: We learned a special 
 * technique to do exactly that).
 * 
 * 
 * -


(function(){
function Question(question,answers,correctAnswer){
    this.question=question;
    this.answers=answers;
    this.correctAnswer=correctAnswer;
}

Question.prototype.displayQuestion =function(){
    console.log(this.question);
    for(var i=0;i< this.answers.length;i++){
        console.log(i+':'+
        this.answers[i]);
    }
}
Question.prototype.checkAnswer=function(ans){
    if(ans===this.correctAnswer){
        console.log("Correct answer");
    }else{
        console.log('Wrong Answer');
    }
}


var question1=new Question('is Javascript the Collest programming language in the World?',
['yes','No'],0);
var question2=new Question('What is the name of this course\'s teacher?',['John','Micheal','Jonas'],2);
var question3=new Question('What does best describe coding?',['Boring','Hard','Fun','Tediuos'],2);
var questions=[question1,question2,question3];

var randomQuestion=Math.floor(Math.random() * questions.length);

questions[randomQuestion].displayQuestion();

var answer =parseInt(prompt('Please select the correct answer'));

questions[randomQuestion].checkAnswer(answer);





})();
 */

/************
 * ---------------Expert level-----------
 * 
 * 8- After you display the result,display the next random question,so that the game never ends (Hint:
 * Write a function for this and call it right after displaying the result)
 * 
 * 
 * 9- Be careful: After Task 8,the game literally never ends.So include the option to quid the game if the 
 * user writes 'exit'  instead of the answer.In this case , Don't call the function from task 8.
 * 
 * 10. Track the user's score to make the game more fun! So each time an answer is correct ,add 1 point to
 * the score (Hint: I'm going to use the power of closures for this,but you don't have to,just do this
 * with the tools you feel more confortable at this point).
 * 
 * 11.Display the score in the console.Use  yet another method for this.
 */


(function(){
function Question(question,answers,correctAnswer){
    this.question=question;
    this.answers=answers;
    this.correctAnswer=correctAnswer;
}

Question.prototype.displayQuestion =function(){
    console.log(this.question);
    for(var i=0;i< this.answers.length;i++){
        console.log(i+':'+
        this.answers[i]);
    }
}
Question.prototype.checkAnswer=function(ans,callback){
    var sc=0;
    if(ans===this.correctAnswer){
        console.log("Correct answer");
        sc=callback(true);
        
    }else{
        console.log('Wrong Answer');
        sc=callback(false);
    }
    this.displayScore(sc);
}

    Question.prototype.displayScore=function(score){
        console.log('your current score is:'+score)
        console.log('-----------------------------');

    }


var question1=new Question('is Javascript the Collest programming language in the World?',
['yes','No'],0);
var question2=new Question('What is the name of this course\'s teacher?',['John','Micheal','Jonas'],2);
var question3=new Question('What does best describe coding?',['Boring','Hard','Fun','Tediuos'],2);
    
    function score(){
        var sc=0;
        
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
            
            
        
    } 

    var keepScore= score();
    console.log(keepScore);
    function nextQuestion(){

    var questions=[question1,question2,question3];

    var randomQuestion=Math.floor(Math.random() * questions.length);

    questions[randomQuestion].displayQuestion();

    var answer =prompt('Please select the correct answer');

    
    if(answer!== 'exit'){
        questions[randomQuestion].checkAnswer(parseInt(answer),keepScore);
        
        nextQuestion();
        
    }
    
}

    nextQuestion();






})();









