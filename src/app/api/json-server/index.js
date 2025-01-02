const jsonServer = require('json-server');
const path = require('path');

// Create server
const server = jsonServer.create();

// Correct path to your db.json file for Vercel
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Place db.json in the same directory as this file or use a relative path

// Use default middlewares (logger, static, cors, etc.)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export as a Vercel serverless function
module.exports = server;
