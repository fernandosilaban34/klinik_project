#!/usr/bin/env node

/**
 * Module dependencies.
 */

 var app = require('./app');
 var debug = require('debug')('appilustrasi:server');
 var http = require('http');
 
 var numCPUs = require('os').cpus().length;
 var cluster = require('cluster');
 var dotenv = require('dotenv');
 var env = dotenv.config();
 
 var bodyParser = require('body-parser');
 
 app.use(bodyParser.json({ limit: '10000kb', extended: true }));
 app.use(bodyParser.urlencoded({ extended: true, limit: '10000kb' }));
 
 
 /**
  * Get port from environment and store in Express.
  */
 var port = normalizePort(process.env.REACT_APP_PORTAPPILUSTRASI || '5555');
 app.set('port', port);
 
 if (cluster.isMaster) {
   console.log(`Master process started with PID ==> ${process.pid}`);
   console.log(`Listen Port ==> ${port}`);
 
   for (var i = 0; i < numCPUs; i++) {
     cluster.fork();
   };
 
   cluster.on('exit', function (worker, code, signal) {
     console.log(`Worker ${worker.process.pid} exited, respawning...`);
     cluster.fork();
   });
 
   cluster.on('listening', function (worker, address) {
     console.log(`Worker started with PID ==> ${worker.process.pid}`);
   });
 } else {
   /**
    * Create HTTP server.
    */
 
   var server = http.createServer(app);
 
   /**
    * Listen on provided port, on all network interfaces.
    */
 
   server.listen(port);
   server.on('error', onError);
   server.on('listening', onListening);
 }
 
 /**
  * Normalize a port into a number, string, or false.
  */
 
 function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 
 /**
  * Event listener for HTTP server "error" event.
  */
 
 function onError(error) {
   if (error.syscall !== 'listen') {
     throw error;
   }
 
   var bind = typeof port === 'string'
     ? 'Pipe ' + port
     : 'Port ' + port;
 
   // handle specific listen errors with friendly messages
   switch (error.code) {
     case 'EACCES':
       console.error(bind + ' requires elevated privileges');
       process.exit(1);
       break;
     case 'EADDRINUSE':
       console.error(bind + ' is already in use');
       process.exit(1);
       break;
     default:
       throw error;
   }
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
   var addr = server.address();
   var bind = typeof addr === 'string'
     ? 'pipe ' + addr
     : 'port ' + addr.port;
   debug('Listening on ' + bind);
 }
 