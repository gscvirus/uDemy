function calculateAge( yearOfBirth ) {
    var currentYear = new Date( ).getFullYear( );

    return currentYear - yearOfBirth;
}

function yearsUntilRetirement( name, yearOfBirth, ageOfRetirement ) {
    var age = calculateAge( yearOfBirth );
    var missingYears = ageOfRetirement - age;

    if( missingYears >= 0 ) {
        console.log( name + ' retires in ' + missingYears + ' years.' );
    } else {
        console.log( name + " has already retired" );
    }

    

    return missingYears;
}