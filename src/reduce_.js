// reduce_
// -------

// `reduce_( callback{Function}[, initialValue{Any}] )`
// `-> _part( list{List} )`
// `-> list.reduce( callback, initialValue )`

module.exports = require( 'part' ).create_( Array.prototype.reduce );