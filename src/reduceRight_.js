// reduceRight_
// ------------

// `reduceRight_( callback{Function}[, initialValue{Any}] )`
// `-> _part( list{List} )`
// `-> list.reduceRight( callback, initialValue )`

module.exports = require( 'part' ).create_( Array.prototype.reduceRight );
