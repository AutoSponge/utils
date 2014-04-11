utils
=====

utility functions, may based on _part_

Build a file with specific utilities:

`browserify ./src/utils.js -t [ ./build --ncurry --compose ] > utils.js`

Build a file with all utilities:

`browserify ./src/utils.js -t ./build > utils.js`

or

`npm run build-all`

Run tests:

`npm test`

## TODO

generate docs