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







var scores,roundScore,activePlayer,dice;

scores=[0,0];
roundScore=0;
activePlayer=0;

//dice=Math.floor(Math.random() *6) + 1;

//console.log(dice);

//document.querySelector('#current--' +activePlayer).textContent=dice; 
//document.querySelector('#current--' +activePlayer).innerHTML= '<em>' + dice + '</em>';
//var x= document.querySelector('#score--0').textContent;
//console.log(x);

document.querySelector('.dice').style.display='none'; 

document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';

document.querySelector('.btn--roll').addEventListener('click',function(){
   // Do something here

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
});

document.querySelector('.btn--hold').addEventListener('click',function(){
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
   }else{
      nextPlayer();
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
















