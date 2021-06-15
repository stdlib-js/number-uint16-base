<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Uint16

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Base utilities for unsigned 16-bit integers.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-uint16-base
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/number-uint16-base' );
```

#### ns

Base utilities for unsigned 16-bit integers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`fromBinaryStringUint16( bstr )`][@stdlib/number/uint16/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer from a literal bit representation.</span>
-   <span class="signature">[`toBinaryStringUint16( x )`][@stdlib/number/uint16/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 16-bit integer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/number-uint16-base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint16-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint16-base

[test-image]: https://github.com/stdlib-js/number-uint16-base/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/number-uint16-base/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint16-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint16-base?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint16-base
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint16-base/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint16-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/uint16/base/from-binary-string]: https://github.com/stdlib-js/number-uint16-base-from-binary-string

[@stdlib/number/uint16/base/to-binary-string]: https://github.com/stdlib-js/number-uint16-base-to-binary-string

<!-- </toc-links> -->

</section>

<!-- /.links -->
