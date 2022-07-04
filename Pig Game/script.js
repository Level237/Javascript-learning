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

dice=Math.floor(Math.random() *6) + 1;

console.log(dice);

