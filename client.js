const net = require("net"); // make sure this line is included
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
   
  // handle incoming data
  conn.on('data', (data) => {
    console.log('Message from server:', data);
  });


  return conn;
};


// exporting connection function to play.js
module.exports = { connect };