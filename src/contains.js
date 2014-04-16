/**
 * @method contains
 * @param {*} needle
 * @returns {Function} which expects an Array or Arguments to search and returns a Boolean
 */
module.exports = function ( needle ) {
    'use strict';
    return function search( haystack ) {
        return haystack && haystack.indexOf ?
               haystack.indexOf( needle ) > -1 :
               require( 'part-native' )( 'Array.indexOf_' )( needle )( haystack ) > -1;
    };
};