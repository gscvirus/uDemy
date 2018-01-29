///////////////////////////////////////
// Lecture: Hoisting

calculateAge( 1965 );

function calculateAge( year ) {
    console.log( ( new Date( ) ).getFullYear( ) - year );

    return ( new Date( ) ).getFullYear( ) - year;
}

var retirement = function( year ) {
    console.log( 65 - calculateAge( year ) );
}

retirement( 1956 );













///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









