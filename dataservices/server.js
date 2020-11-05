'use strict';

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = require('./app');

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);