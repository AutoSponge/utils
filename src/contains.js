// contains
// --------

// `contains( needle{Any} )`
// `-> search( haystack{List|String} )`
// `-> {Boolean}`

module.exports = function ( needle ) {
    'use strict';
    return function search( haystack ) {
        return haystack && haystack.indexOf ?
               haystack.indexOf( needle ) > -1 :
               require( './indexOf_' )( needle )( haystack ) > -1;
    };
};