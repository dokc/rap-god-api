# how-to-dok-api

API for the how-to-dok project.

## Project setup

Run the following commands to setup the server

 - Add `node_modules`
 ```yarn dev```
 - Transpile the code 
 ```yarn transpile```
 - Run the server
 ```yarn dev```


## Babel configuration

The express backend server uses the older standard of the Javascript (Accordding to the [EcmaScript Standards](https://www.ecma-international.org/technical-committees/tc39/))

We need to transpile the code from ES6+ to do the work for us, for this we need to run

`yarn transpile`