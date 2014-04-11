var test = require( 'tape' );
var pipeline = require( '../src/pipeline' );

test( 'pipeline', function ( t ) {
    t.plan( 4 );

    function a( a, b, c ) {
        return a + (b || '') + (c || '') + 'A';
    }

    function b( x ) {
        return x + 'B';
    }

    function c( x ) {
        return x + 'C';
    }

    function d( x ) {
        return x + 'D';
    }

    t.equal( pipeline( [a, b, c, d] )( '' ), 'ABCD', 'executes functions array right to left' );
    t.equal( pipeline( {0:a, 1:b, 2:c, 3:d, length:4} )( '' ), 'ABCD', 'executes functions object list right to left' );
    t.equal( pipeline( [a, b, c, d] )( 1,2,3 ), '1ABCD', 'compose guards against additional parameters' );
    t.equal( pipeline( [a] )( '' ), a( '' ), 'returns equivalent function if only passed one function argument' );
} );