var assert = require("assert");
var exec = require('child_process').exec,
    child;

child = exec('node ../hw2.js',
  function (error, stdout, stderr) {

  	//console.log(stdout + "asd");
  	assert(stdout === 'Hello World!\n', "Expected 'Hello World!' but encountered ", stdout);
  	console.log("tested OK!");

    if (error !== null) {
      console.log('exec error: ' + error);
    }
});