var browserify = require( 'browserify' );
var fs = require( 'fs' );
var path = require( 'path' );
var through = require('through');
var glob = require( 'glob' ).sync;
var all = fs.readdirSync( 'src' );
var options = {};
var removeList = [
    'global',
    'utils',
    'namespace'
];
var removeKeys = function ( key ) {
    return removeList.indexOf( key ) === -1;
};
var removeExtension = function ( key ) {
    return key.replace( '.js', '' );
};
var allKeys = all.map( removeExtension )
    .filter( removeKeys );

var keys = process.argv.slice( 2 ).filter(function ( val ) {
    var split = val.split( '=' );
    if ( split[1] ) {
        options[split[0]] = split[1];
        return false;
    }
    return allKeys.indexOf( val ) > -1;
});

var b = browserify();
if ( !keys.length ) {
    keys = allKeys;
    glob( './src/*.js' ).map( function ( filename ) {
        b.add( filename );
    } );
} else {
    ['utils'].concat( keys ).map( function ( key ) {
        console.log( __dirname + '/src/' + key + '.js' );
        b.add( __dirname + '/src/' + key + '.js' );
    } );
}

b.transform(function (file/*, options*/) {
    var source = '';

    function read( chunk ) {
        source += chunk;
    }

    function end() {
        var filename = path.basename(file);
        if ( filename === 'utils.js' ) {
            console.log( keys );
            keys.forEach( function ( key, i ) {
                if ( options.namespace ) {
                    if ( i === 0 ) {
                        source += '/** @module ' + options.namespace + ' */\n';
                        source += 'var ' + options.namespace + '= {};\n';
                        source += 'global.' + options.namespace + ' = ' +  options.namespace + ';\n';
                    }
                    source += options.namespace + '.' + key + ' = require( "./' + key + '" );\n';
                } else {
                    source += 'global.' + key + ' = require( "./' + key + '" );\n';
                }
            } );
        }

        this.queue( source );
        this.queue( null );
    }

    return through( read, end );
});
b.bundle().pipe( fs.createWriteStream( options.output || 'utils.js' ) );
