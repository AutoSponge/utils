var test = require( 'tape' );
var leave = require( '../src/leave' );

test( 'leave', function ( t ) {
    t.plan( 3 );

    function args() {
        return Array.prototype.slice.call( arguments, 0 );
    }

    t.deepEqual( leave( 0 )( args )( 1, 2, 3, 4 ), [], 'executes fn with the correct arguments' );
    t.deepEqual( leave( 1 )( args )( 1, 2, 3, 4 ), [1], 'executes fn with the correct arguments' );
    t.deepEqual( leave( -1 )( args )( 1, 2, 3, 4 ), [1,2,3], 'executes fn with the correct arguments' );
} );