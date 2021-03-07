// Patch console.x methods in order to add timestamp information
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

console.log('Hello World!');
// -> [26/06/2015 14:02:48.062] [LOG] Hello World!

var port = 8080;
console.log('Server running at port %d', port);
// -> [26/06/2015 16:02:35.325] [LOG] Server running at port 8080
