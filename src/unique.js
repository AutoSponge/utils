// unique
// ------

// filters a list for unique values and returns an array
module.exports = require( './filter_' )( function ( e, i, o ) {
    return require( './lastIndexOf_' )( e )( o ) === i;
} );