const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // you can use any port number here; i chose to use 8080

server.use(middlewares);
server.use(router);

server.listen(port);