// ncurry
// ------

// `ncurry( n{Integer||null}, fn{Function}[, ...{Any}] )`
// `-> ncurry( ...{Any} ) || fn.apply( this, n-arguments )`
// if `n` is `null`, the function's length will be used as `n`

function ncurry( n, fn ) {
    'use strict';
    var fnn = n === null ? fn.length : n;
    if ( arguments.length >= fnn + 2 ) {
        return fn.apply( null, require( './take' )( fnn )( require( './skip' )( 2 )( arguments ) ) );
    }
    return require( './papply' )( ncurry, null ).apply( null, arguments );
}

module.exports = ncurry;