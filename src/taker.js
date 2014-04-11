// taker
// -----

// `taker( n )`
// `-> _part( list{List} )`
// `-> list.slice( 0, 0 - n );`

module.exports = function taker( n ) {
    return require( './skip').call( this, 0 - n );
};