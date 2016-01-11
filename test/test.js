'use strict';

// MODULES //

var test = require( 'tape' );
var list = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof list === 'function', 'main export is a function' );
	t.end();
});

test( 'module exports a factory method', function test( t ) {
	t.ok( typeof list.factory === 'function', 'export includes a factory method' );
	t.end();
});
