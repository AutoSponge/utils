// flip
// ----

// `flip( fn{Function}[, receiver{Object}] )`
// `-> flop( a{Any}, b{Any} )`
// `-> fn.call( receiver, b, a )`

module.exports = function flip( fn, receiver ) {
    'use strict';
    return function flop( a, b ) {
        return fn.call( receiver, b, a );
    };
};
