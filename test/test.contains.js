var test = require( 'tape' );
var contains = require( '../src/contains' );

test( 'contains', function ( t ) {
    t.plan( 5 );

    t.equal( contains( 0 )( [4,3,2,0,1] ), true, 'can search arrays' );
    t.equal( contains( 0 )( [0,1,2,3,4] ), true, 'can search arrays' );
    t.equal( contains( 0 )( {0:0,1:1,2:2,3:3,4:4,length:5} ), true, 'can search list objects' );
    t.equal( contains( '0' )( 'l0l' ), true, 'can search strings' );
    t.equal( contains( '0' )( '0ll' ), true, 'can search strings' );
} );