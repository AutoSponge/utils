// pipeline
// --------

// `pipeline( fns{List} )`
// `-> fn( x )`
// `-> a( b( c( x ) ) )`

module.exports = module.exports = require( './papply' )( require( './reduce_' )( require( './flip' )( require( './call_' )( null ) ) ) );