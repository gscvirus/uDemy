var years = [ 1974, 1975, 2008, 2006 ];
var ages = [ ];

function calculateAge( birthYear ) {
    return ( new Date( ) ).getFullYear( ) - birthYear;
}

function printFullAge( years ) {
    var ages = [ ];
    var fullAge = [ ];

    for( var idx = 0; idx < years.length; idx++ ) {
        ages.push( calculateAge( years[ idx ] ) );
    }

    for( var idx = 0; idx < ages.length; idx++ ) {
        fullAge.push( ( ages[ idx ] >= 18 ? true : false ) );
    }

    return fullAge;
}

for( var idx = 0; idx < years.length; idx++ ) {
    ages.push( calculateAge( years[ idx ] ) );
}

for( var idx = 0; idx < ages.length; idx++ ) {
    if( ages[ idx ] >= 18 ) {
        console.log( "is full age (18 years old) " + ages[ idx ] );
    }
}

var input = [ 1965, 2008, 1992 ];
var output = printFullAge( input );
console.log( output );