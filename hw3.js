//Using streams

//Require de "fs" module, which comes with node's native STD library
var fs = require('fs');

//Read the content of hello_world.txt and stream it out.
fs.createReadStream('./hello_world.txt').pipe(process.stdout);
