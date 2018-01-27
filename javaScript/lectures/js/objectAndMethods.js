var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: [ "Jane", "Mark", "bob" ],
    calculateAge: function( ) {
        return ( new Date( ) ).getFullYear( ) - this.yearOfBirth;
    }
};

console.log( john.calculateAge( ) );
john.age = john.calculateAge( );
console.log( john );