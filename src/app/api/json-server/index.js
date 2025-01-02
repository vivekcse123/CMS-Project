// /api/json-server/index.js
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../../angular-project/src/assets/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
