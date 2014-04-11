// unique
// ------

// `unique( list{List} )`
// `-> {Array}`
// filters a list for unique values and returns an array

module.exports = require( './filter_' )( function ( e, i, o ) {
    'use strict';
    return require( './lastIndexOf_' )( e )( o ) === i;
} );