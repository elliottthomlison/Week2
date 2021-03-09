const net = require('net');

const server = net.createServer();

server.listen(3000, () => { //listening on this port (3000)
  console.log('Server listening on port 3000!');
});

const onConnect = (connection) => { //answering the call here
    console.log('New client connected!'); 
    connection.write('Hello there!'); 
  }; 

// server.js
// add this line after server is created, before listen is called
server.on('connection', onConnect); //pizza analogy call the pizza place and they call us back at the callback information
//when we get a connection the callback function takes place on line 9


// this is the pizza shop in that analogy 
// we tell the server how to respon 
// when we get a connection a conversation begins