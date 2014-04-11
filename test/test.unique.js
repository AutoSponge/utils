var test = require( 'tape' );
var unique = require( '../src/unique' );

test( 'unique', function ( t ) {
    t.plan( 2 );

    t.deepEqual( unique( [1,2,4,3,2,1] ), [4,3,2,1], 'can search arrays' );
    t.deepEqual( unique( {0:1,1:2,2:4,3:3,4:2,5:1,length:6} ), [4,3,2,1], 'can search object lists' );
} );