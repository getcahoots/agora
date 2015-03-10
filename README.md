# cahoots - forumize

This repository contains our UI theme of the [Cahoots forum](https://forum.cahoots.pw).

It originated as a fork of the Bootstrap-based theme from [Kasper Isager](https://github.com/kasperisager/vanilla-bootstrap).

## Development

You need Node.js / io.js in order to build the theme.

Install all dependencies via npm:

```sh
$ npm install
```

### Tasks

#### Build - `npm run build`
Compiles all theme assets using Gulp. LESS stylesheets will be compiled to [`design/style.css`](design/style.css) and Javascripts will be concatenated and output to [`js/custom.js`](js/custom.js).

#### Watch - `npm run watch`
Watches the assets for changes and runs the appropriate Gulp tasks. Also starts a Livereload server that will push the changes to your Vanilla installation automatically.

---

Copyright &copy; 2014-2015 [Cahoots](https://github.com/getcahoots). Licensed under the terms of the [MIT License](LICENSE.md)
