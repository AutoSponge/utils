// call_
// -----

// `call_( receiver{Object}[, ...args{Any}] )`
// `-> _part( fn{Function} )`
// `-> fn.call( receiver, ...args )`

module.exports = require( 'part' ).create_( Function.prototype.call );
