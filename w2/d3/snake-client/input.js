let connection;

const connect  = require('./play');

// function handleUserInput(userKeys) {
//     console.log("repeating", userKeys) //"repeating" is the string that will be printed when userKeys is executed
//     if (userKeys === "\u0003") { //this code equates to control-c
//       process.exit()  //this is what will happen when the above key is pressed
//     }
//   } 
  
  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    const handleUserInput = function(key) {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        connection.write('Move: up');
      }
      if (key === 'a') {
        connection.write('Move: left');
      }
      if (key === 's') {
        connection.write('Move: down');
      }
      if (key === 'd') {
        connection.write('Move: right');
      }
      if (key === 'h') {
        connection.write('Say: Hey');
      }
      if (key === 'i') {
        connection.write('Say: I win!');
      }
      if (key === 'l') {
        connection.write('Say: You lose!');
      }
    
    }; //when the user types in data and enters it will trigger the stdin.on and trigger / will forward the string via teh callback
    return stdin; //"data" can be understood to be the data that the callback on line 6 affects
  }

  module.exports = connect 

  setupInput()
  handleUserInput()

  //data === our trokes 