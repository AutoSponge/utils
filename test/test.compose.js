var test = require( 'tape' );
var compose = require( '../src/compose' );

test( 'compose', function ( t ) {
    t.plan( 4 );
    function a( x ) {
        return x + 'A';
    }

    function b( x ) {
        return x + 'B';
    }

    function c( x ) {
        return x + 'C';
    }

    function d( a, b, c ) {
        return a + (b || '') + (c || '') + 'D';
    }

    t.equal( compose( [a, b, c, d] )( '' ), 'DCBA', 'executes functions array right to left' );
    t.equal( compose( {0:a, 1:b, 2:c, 3:d, length:4} )( '' ), 'DCBA', 'executes functions object list right to left' );
    t.equal( compose( [a, b, c, d] )( 1,2,3 ), '1DCBA', 'compose guards against additional parameters' );
    t.equal( compose( [a] )( '' ), a( '' ), 'returns equivalent function if only passed one function argument' );
} );