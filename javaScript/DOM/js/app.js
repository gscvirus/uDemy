/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next 
  player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [ 0, 0 ];
var roundScore = 0;
var activePlayer = 0;

function diceGenerator( ) {
    return Math.floor( Math.random( ) * 6 ) + 1;
}

document.getElementById( "score-0" ).textContent = "0";
document.getElementById( "score-1" ).textContent = "0";
document.getElementById( "current-0" ).textContent = "0";
document.getElementById( "current-1" ).textContent = "0";

document.querySelector( ".dice" ).style.display = "none";
document.querySelector( ".btn-roll" ).addEventListener( "click", function( ) {
    var diceImageDOM = document.querySelector( ".dice" );
    var dice = diceGenerator( );

    diceImageDOM.style.display = "block";
    diceImageDOM.src = "./images/dice-" + dice + ".png";

    if( dice > 1 ) {
        roundScore += dice;
        document.querySelector( "#current-" + activePlayer ).textContent = roundScore;
    } else {
        nextPlayer( );
    }
} );

document.querySelector( ".btn-hold" ).addEventListener( "click", function( ) {
    scores[ activePlayer ] += roundScore;
    document.querySelector( "#score-" + activePlayer ).textContent = scores[ activePlayer ];
    if( scores[ activePlayer ] >= 100 ) {
        document.querySelector( "#name-" + activePlayer ).textContent = "Winner!";
        document.querySelector( ".dice" ).style.display = "none";
    } else {
        nextPlayer( );
    }
} );

function nextPlayer( ) {
    document.querySelector( "#current-" + activePlayer ).textContent = "0";
    document.querySelector( ".player-" + activePlayer + "-panel" ).classList.remove( "active" );
    roundScore = 0;
    activePlayer = ( activePlayer == 0 ) ? 1 : 0;
    document.querySelector( ".player-" + activePlayer + "-panel" ).classList.add( "active" );
}