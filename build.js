var through = require( 'through' );
var fs = require( 'fs' );
var all = fs.readdirSync( 'src' );
var removeList = [
    'utils',
    '_'
];

function removeKeys( key ) {
    return removeList.indexOf( key ) === -1;
}

function removeExtension( key ) {
    return key.replace( '.js', '' );
}

module.exports = function ( file, options ) {
    var source = '';
    var keys = Object.keys( options )
        .filter( removeKeys );

    if ( !keys.length ) {
        keys = all.map( removeExtension )
            .filter( removeKeys );
    }

    function read( chunk ) {
        source += chunk;
    }

    function end() {
        keys.forEach( function ( key ) {
            source += "global." + key + " = require( './" + key + "' );\n";
        } );

        this.queue( source );
        this.queue( null );
    }

    return through( read, end );
};
