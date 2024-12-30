const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');  // path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);  // Use json-server router for handling REST API

module.exports = server;
