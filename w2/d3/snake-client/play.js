const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

setupInput(connect()); //setupInput is calling the function which  is coming from client.js
//setupinput comes from the other file