var assert = require("assert");
var exec = require('child_process').exec,
    child;

child = exec('node hw3.js', {cwd: '../'},
  function (error, stdout, stderr) {

  	assert(stdout.indexOf('Hello World!') !== -1, "Expected 'Hello World!' but encountered ", stdout);
  	console.log("tested OK!");

    if (error !== null) {
      console.log('exec error: ' + error);
    }
});