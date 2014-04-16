// unique
// ------

// `unique( list{List} )`
// `-> {Array}`
// filters a list for unique values and returns an array
var native = require( 'part-native' );
module.exports = native( 'Array.filter_' )( function ( e, i, o ) {
    'use strict';
    return native( 'Array.lastIndexOf_' )( e )( o ) === i;
} );