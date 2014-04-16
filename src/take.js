// take
// ----

// `take( n )`
// `-> _part( list{List} )`
// `-> list.slice( 0, n );

module.exports = require( 'part-native' )( 'Array.slice_' ).bind( null, 0 );