// slice_
// ------

// slice_( [begin{Integer}], [end{Integer}] ) -> part_( {List} ) -> {Array}
module.exports = require( 'part' ).create_( Array.prototype.slice );
