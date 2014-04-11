// compose
// -------

// `compose( fns{List} )`
// `-> fn( x )`
// `-> c( b( a( x ) ) )`

module.exports = require( './papply' )( require( './reduceRight_' )( require( './flip' )( require( './call_' )( null ) ) ) );



