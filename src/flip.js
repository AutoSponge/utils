module.exports = function flip( fn ) {
    return function flop( a, b ) {
        return fn( b, a );
    };
};
