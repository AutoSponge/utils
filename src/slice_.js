// slice_
// ------

// `slice_( [begin{Integer}], [end{Integer}] )`
// -> `_part( {List} )`
// `-> {Array}`

module.exports = require( 'part' ).create_( Array.prototype.slice );
