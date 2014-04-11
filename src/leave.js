// leave
// -----

// `leave( [n{Integer}] )`
// `-> leaveFn( fn{Function} )`
// `-> guarded( ...{Any} )`
// `-> fn.apply( this, n-arguments )`
// guarded functions will only pass n arguments or fewer when invoked

module.exports = function leave( n ) {
    'use strict';
    return function leaveFn( fn ) {
        return function guarded() {
            return fn.apply( this, require( './take' )( n )( arguments ) );
        };
    };
};
