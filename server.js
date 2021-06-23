const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(function(req, res, next) {
    setTimeout(next, 10000);
});

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on heroku host.');
    done();
});
server.listen(port);