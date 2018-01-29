for( var idx = 0; idx < 99; idx++ ) {
    console.log( numberToString( idx ) );
}


function numberLessThanTen( number ) {
    switch ( number ) {
        case 0:
            return "cero";
        case 1:
            return "uno";
        case 2:
            return "dos";
        case 3:
            return "tres";
        case 4:
            return "cuatro";
        case 5:
            return "cinco";
        case 6:
            return "seis";
        case 7:
            return "siete";
        case 8:
            return "ocho";
        case 9:
            return "nueve";    
    }

    return "not a valid number";
}

function numberGreaterThanTenLessThanTwenty( number ) {
    switch( number ) {
        case 10:
            return "diez";
        case 11:
            return "once";
        case 12:
            return "doce";
        case 13:
            return "trece";
        case 14:
            return "catorce";
        case 15:
            return "quince";
    }

    return "dieci" + numberToString( number - 10 );
}

function numberToString( number ) {
    var result = "";

    if( number < 10 ) {
        result = numberLessThanTen( number );    
    } else if( number >= 10 && number < 20 ) {
        result = numberGreaterThanTenLessThanTwenty( number );
    } else if( number >= 20 && number < 100 ) {
        floor = Math.floor( number / 10 );
        var unity = number % 10;
        switch( floor ) {
            case 2:
                if( unity == 0 ) {
                    result = "veinte";
                    return ;
                }
                result = "veinti" + numberToString( unity );
                break;
            case 3:
                if( unity == 0 ) {
                    result = "treinta";
                    return ;
                }
                result = "treinta y " + numberToString( unity );
                break;
            case 4:
                if( unity == 0 ) {
                    result = "cuarenta";
                    return ;
                }
                result = "cuarenta y " + numberToString( unity );
                break;
            case 5:
                if( unity == 0 ) {
                    result = "cincuenta";
                    return ;
                }
                result = "cincuenta y " + numberToString( unity );
                break;
            case 6:
                if( unity == 0 ) {
                    result = "sesenta";
                    return ;
                }
                result = "sesenta y " + numberToString( unity );
                break;
            case 7:
                if( unity == 0 ) {
                    result = "setenta";
                    return ;
                }
                result = "setenta y " + numberToString( unity );
                break;
            case 8:
                if( unity == 0 ) {
                    result = "ochenta";
                    return ;
                }
                result = "ochenta y " + numberToString( unity );
                break;
            case 9:
                if( unity == 0 ) {
                    result = "noventa";
                    return ;
                }
                result = "noventa y " + numberToString( unity );
                break;
        }
    }

    return result;
}