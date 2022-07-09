/*************************
 * Game Rules:
 * - The Game has 2 players,playing in rounds 
 * - In each turn, a player rolls a dice as many times as he whishes .Each result get added to his round
    score
    -But if the player rolls a 1, all his round score gets lost.After that,it's the next player's turn
    - The player can choose to 'Hold', which means that his round score gets added to his GLBAL score.After 
    that it's the next player's turn
    - The first player to reach 100 points on global score wins the Game
 */







var scores,roundScore,activePlayer,dice,gamePlaying;

initGame();

//dice=Math.floor(Math.random() *6) + 1;

//console.log(dice);

//document.querySelector('#current--' +activePlayer).textContent=dice; 
//document.querySelector('#current--' +activePlayer).innerHTML= '<em>' + dice + '</em>';
//var x= document.querySelector('#score--0').textContent;
//console.log(x);



document.querySelector('.btn--roll').addEventListener('click',function(){
   if(gamePlaying){
      // 1. Random number
   var dice=Math.floor(Math.random() *6) + 1;

   //2.display the result
   var diceDom= document.querySelector('.dice')
   diceDom.style.display='block'; 
   diceDom.src='img/dice-' + dice +'.png';


   // update the rounf score if the rolled number was not a 1

   if(dice !== 1){
      // Add score
      roundScore += dice;
      document.querySelector('#current--'+ activePlayer).textContent=roundScore;
      document.querySelector('')

   } else{
      nextPlayer();
   } 
   } 

   
});

document.querySelector('.btn--hold').addEventListener('click',function(){
   if(gamePlaying){
        // Add Current score to Global Score
   scores[activePlayer] += roundScore;
   
   // Update the UI
   document.querySelector('#score--' + activePlayer).textContent=scores[activePlayer];

   // Check if player won the game
   if(scores[activePlayer]>=20){
      document.querySelector('#name--' + activePlayer).textContent='Winner!';
      document.querySelector('.dice').style.display='none'; 
      document.querySelector('.player--' +activePlayer).classList.add('player--winner');
      document.querySelector('.player--' +activePlayer).classList.remove('player--active');
      gamePlaying=false;
   }else{
      nextPlayer();
   }
   }
   


      
});
function nextPlayer(){
   // Next Player
      activePlayer===0 ? activePlayer=1 : activePlayer=0;
      roundScore=0;

      document.getElementById('current--0').textContent=0;
      document.getElementById('current--0').textContent=0;

      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
      //document.querySelector('.player--0').classList.remove('player--active');
      //document.querySelector('.player--1').classList.add('player--active');

      document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn--new').addEventListener('click',initGame)

function initGame(){
   scores=[0,0];
   roundScore=0;
   activePlayer=0;
   gamePlaying=true;
   document.querySelector('.dice').style.display='none'; 

   document.getElementById('score--0').textContent='0';
   document.getElementById('score--1').textContent='0';
   document.getElementById('current--0').textContent='0';
   document.getElementById('current--1').textContent='0';
   document.getElementById('name--0').textContent='Player 1';
   document.getElementById('name--1').textContent='Player 2';
   document.querySelector('.player--0').classList.remove('player--winner');
   document.querySelector('.player--1').classList.remove('player--winner');
   document.querySelector('.player--1').classList.remove('player--active');
   document.querySelector('.player--0').classList.add('player--active');

}


/*****************************************************
 * Your 3 Chalenges
 * Change the game to follow these rules:
 * 
 * 1- A player looses his ENTIRE score when he rolls two 6 in a row. After that,it's the next player's
 * turn.(Hint: Always save the previous dice roll in a separate variable)
 * 2- Add an input field to the HTML where players can set the winning score,so that they can change the 
 * predefined score of 100.(Hint: you can read value with the value property in Javascript.this is a 
 * good oportunity to use google to figure this out :)
 * 3. Add another dice to the game , so that there are two dices now.The player looses his current score
 * when one of them is a 1. (Hint: you will need css to position the second dice ,so take a look at the css 
 * code for the first one.)
 */
















