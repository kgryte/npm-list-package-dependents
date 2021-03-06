Package Dependents
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> List a package's dependents.


## Installation

``` bash
$ npm install npm-list-package-dependents
```


## Usage

``` javascript
var list = require( 'npm-list-package-dependents' );
```

<a name="list"></a>
#### list( options, clbk )

List a package's dependents.

``` javascript
list( {'package': '<package>'}, clbk );

function clbk( error, list ) {
	if ( error ) {
		throw error;
	}
	console.log( list );
	// returns ['<pkg1>','<pkg2>',...]
}
```

The `function` accepts the following `options`:
*	__package__: package name (*required*).
*	__registry__: registry. Default: `'registry.npmjs.org'`.
*	__port__: registry port. Default: `443` (HTTPS) or `80` (HTTP).
* 	__protocol__: registry protocol. Default: `'https'`.

To query an alternative registry, set the relevant options.

``` javascript
var opts = {
	'package': '<package>',
	'registry': 'my.favorite.npm/registry',
	'port': 8080,
	'protocol': 'http'
};

list( opts, clbk );
```


#### list.factory( options, clbk )

Creates a reusable `function`.

``` javascript
var get = list.factory( {'package': '<package>'}, clbk );

get();
get();
get();
// ...
```

The factory method accepts the same `options` as [`list()`](#list).


## Notes

*	When querying the main registry, the `function` __only__ returns non-scoped public packages (see NPM issue [#8244](https://github.com/npm/npm/issues/8244)).



## Examples

``` javascript
var list = require( 'npm-list-package-dependents' );
var counts = require( 'npm-package-download-counts' );

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
```

To run the example code from the top-level application directory,

``` bash
$ DEBUG=* node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g npm-list-package-dependents
```


### Usage

``` bash
Usage: deppkgs [options] package

Options:

  -h,  --help                Print this message.
  -V,  --version             Print the package version.
  -p,  --port port           Registry port. Default: 443 (HTTPS) or 80 (HTTP).
       --registry registry   Registry. Default: 'registry.npmjs.org'.
       --protocol protocol   Registry protocol. Default: 'http'.
```


### Notes

*	The package list is written to `stdout` as a newline-delimited `string`.


### Examples

``` bash
$ DEBUG=* deppkgs dstructs-matrix
# compute-abs
# compute-digamma
# compute-erf
# ...
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/npm-list-package-dependents.svg
[npm-url]: https://npmjs.org/package/npm-list-package-dependents

[build-image]: http://img.shields.io/travis/kgryte/npm-list-package-dependents/master.svg
[build-url]: https://travis-ci.org/kgryte/npm-list-package-dependents

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/npm-list-package-dependents/master.svg
[coverage-url]: https://codecov.io/github/kgryte/npm-list-package-dependents?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/npm-list-package-dependents.svg
[dependencies-url]: https://david-dm.org/kgryte/npm-list-package-dependents

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/npm-list-package-dependents.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/npm-list-package-dependents

[github-issues-image]: http://img.shields.io/github/issues/kgryte/npm-list-package-dependents.svg
[github-issues-url]: https://github.com/kgryte/npm-list-package-dependents/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
