// pipeline
// --------

// `pipeline( fns{List} )`
// `-> fn( x )`
// `-> a( b( c( x ) ) )`
var native = require( 'part-native' );
module.exports = require( 'part' )
    .papply( native( 'Array.reduce_' )( require( './flip' )( native( 'Function.call_' )( null ) ) ) );