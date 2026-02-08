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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Uint16

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base utilities for unsigned 16-bit integers.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint16-base@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { add, fromBinaryStringUint16, identity, mul, sub, toBinaryStringUint16 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint16-base@esm/index.mjs';
```

#### ns

Base utilities for unsigned 16-bit integers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( x, y )`][@stdlib/number/uint16/base/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two unsigned 16-bit integers.</span>
-   <span class="signature">[`fromBinaryStringUint16( bstr )`][@stdlib/number/uint16/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create an unsigned 16-bit integer from a literal bit representation.</span>
-   <span class="signature">[`identity( x )`][@stdlib/number/uint16/base/identity]</span><span class="delimiter">: </span><span class="description">evaluate the identity function of an unsigned 16-bit integer.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/number/uint16/base/mul]</span><span class="delimiter">: </span><span class="description">multiply two unsigned 16-bit integers.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/number/uint16/base/sub]</span><span class="delimiter">: </span><span class="description">subtract two unsigned 16-bit integers.</span>
-   <span class="signature">[`toBinaryStringUint16( x )`][@stdlib/number/uint16/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of an unsigned 16-bit integer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint16-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint16-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint16-base

[test-image]: https://github.com/stdlib-js/number-uint16-base/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/number-uint16-base/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint16-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint16-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint16-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint16-base/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint16-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint16-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint16-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint16-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint16-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint16-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint16-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint16-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/uint16/base/add]: https://github.com/stdlib-js/number-uint16-base-add/tree/esm

[@stdlib/number/uint16/base/from-binary-string]: https://github.com/stdlib-js/number-uint16-base-from-binary-string/tree/esm

[@stdlib/number/uint16/base/identity]: https://github.com/stdlib-js/number-uint16-base-identity/tree/esm

[@stdlib/number/uint16/base/mul]: https://github.com/stdlib-js/number-uint16-base-mul/tree/esm

[@stdlib/number/uint16/base/sub]: https://github.com/stdlib-js/number-uint16-base-sub/tree/esm

[@stdlib/number/uint16/base/to-binary-string]: https://github.com/stdlib-js/number-uint16-base-to-binary-string/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
