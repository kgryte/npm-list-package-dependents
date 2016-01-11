'use strict';

var counts = require( 'npm-package-download-counts' );
var list = require( './../lib' );

// Get the download counts for all dependent packages...
var opts = {
	'package': 'dstructs-matrix'
};

list( opts, onList );

function onList( error, list ) {
	var opts;
	if ( error ) {
		throw error;
	}
	opts = {
		'packages': list
	};
	counts( opts, onCounts );
}

function onCounts( error, counts ) {
	if ( error ) {
		throw error;
	}
	console.dir( counts );
}
