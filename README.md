utils
=====

utility functions, many based on _part_

Build a file with specific utilities as globals:

`browserify ./src/utils.js -t [ ./build --ncurry --compose ] > utils.js`

Build a file with specific utilities in a namespace:

`browserify ./src/utils.js -s utils -t [ ./build --namespace --ncurry --compose ] > utils.js`

Build a file with all utilities as globals:

`browserify ./src/utils.js -t ./build > utils.js`

or

`npm run build-globals`

Build a file with all utilities in the 'utils' namespace:

`browserify ./src/utils.js -s utils -t [ ./build --namespace ] > utils.js`

or

`npm run build-utils`

Run tests:

`npm test`

Run tests in a browser (using tape-run):

- `npm run test-phantom`
- `npm run test-chrome`
- `npm run test-firefox`
- `npm run test-safari`
- `npm run test-ie`

## Docs

[docs](http://autosponge.github.io/utils/docs/)

## TODO

- generate docs
- figure out why phantom fails with some dependencies
