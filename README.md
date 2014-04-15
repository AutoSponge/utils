utils
=====

utility functions, many based on _part_

Build the default file with specific utilities as globals:

`node build.js ncurry compose`

Build the default file with specific utilities in a namespace:

`node build.js namespace=utils ncurry compose`

Build the default file with all utilities as globals:

`node build.js`

Build the default file with all utilities in the 'utils' namespace:

`node build.js namespace=utils`

Build a specific file

`node build.js output=myfile.js`

Run tests:

`npm test`

Run tests in a browser (using tape-run):

- `npm run test-phantom`
- `npm run test-chrome`
- `npm run test-firefox`
- `npm run test-safari`
- `npm run test-ie`

## Docs

[docs](http://autosponge.github.io/utils/doc/)

## TODO

- figure out why phantom fails with some dependencies
