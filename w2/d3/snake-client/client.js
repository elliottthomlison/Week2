// const net = require('net');
// const connect = function () {
//   const conn = net.createConnection({
//     host: HOST,
//     port: PORT
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');
//   conn.on('connect', () => {
//     console.log('Intruder Alert: You Are Connected');
//     conn.write(`${NAME}`);
//   });

//   return conn;
// }
// module.exports = { connect };

const net = require('net');
const { HOST, PORT, NAME } = require('./constants')
const connect = function(){ //connect server
  const conn = net.createConnection({ //conn is usually client
    HOST: '135.23.222.131',
    PORT: 50542
    
  });
  conn.on('connect', () => {
    conn.write('Name: GTF')
  })
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up')
    }, 1000);

  })
   conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up')
    }, 1000);
  })
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: left')
    }, 1000);
  })
  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: right')
    }, 1000);
  })
  
  conn.on('data', (data) => { //idling prompt if you die
    console.log(data, "its got a sharp tongue this server")
  })

  conn.setEncoding('utf8');
 
  return conn; //conn is being called and creating a connection with the server
}

module.exports = connect 
//it means the client.js file holds the function connect. 
//The export means its allowing that function to be put into 
//other files.
//by the require whatever in that other file 

module exports = the function you are trying to export
