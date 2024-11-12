// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); //handle input
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
//handling userinput code function
const handleUserInput = function (key) {
  // Exit the game when 'Ctrl + C' is pressed
  if (key === '\u0003') {
    process.exit();
  }

  // Move up when 'w' is pressed
  if (key === 'w') {
    connection.write("Move: up");
  }
  
  // Move down when 's' is pressed
  if (key === 's') {
    connection.write("Move: down");
  }
  
  // Move left when 'a' is pressed
  if (key === 'a') {
    connection.write("Move: left");
  }
  
  // Move right when 'd' is pressed
  if (key === 'd') {
    connection.write("Move: right");
  }
};

//exporting
module.exports = { setupInput };