// apply_
// ------

// `apply_( receiver{Object}[, arguments{List}] )`
// `-> _part( fn{Function} )`
// `-> fn.apply( receiver, arguments )`
module.exports = require( 'part' ).create_( Function.prototype.apply );