module.exports = function taker( n ) {
    return require( './skip').call( this, 0 - n );
};