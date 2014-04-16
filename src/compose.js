var native = require( 'part-native' );
/**
 * @method compose
 * @param {Function[]} fns
 * @returns {Function} which expects one or no arguments
 */
module.exports = require( 'part' ).papply(
    native( 'Array.reduceRight_' )( require( './flip' )( native( 'Function.call_' )( null ) ) )
);



