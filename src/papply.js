// papply
// ------

// `papply( fn{Function}, [receiver{Object}] )`
// `-> part_( ...a{Any} )`
// `-> part_( ...b{Any} ) `
// `-> fn.apply( receiver, [...a, ...b] )`
module.exports = require( 'part' ).papply;