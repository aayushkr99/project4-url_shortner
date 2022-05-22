const route = require('./route/route.js');
const app = require('./server.js').app

app.use('/', route);

module.exports = app