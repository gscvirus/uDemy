var johnHeight = 680;
var friendHeight = 700;
var johnAge = 25;
var friendAge = 23;
var thirdFriendHeight = 720;
var thirdFriendAge = 20;

function calculateScore( height, age ) {
    return height + ( age * 5 );
}

var johnResult = calculateScore( johnHeight, johnAge );
var friendResult = calculateScore( friendHeight, friendAge );
var thirdFriendResult = calculateScore( thirdFriendHeight, thirdFriendAge );

if( johnResult > friendResult && johnResult > thirdFriendResult ) {
    console.log( "John wins the game " + johnResult );
} else if( friendResult > johnResult && friendResult > thirdFriendResult ) {
    console.log( "John's friend wins the game " + friendResult );
} else if( thirdFriendResult > johnResult && thirdFriendResult > friendResult ) {
    console.log( "Third friend wins the game " +  thirdFriendResult );
} else if( johnResult === friendResult && johnResult === thirdFriendResult ) {
    console.log( "There is draw, all players with the same score: " + johnResult );
} 