'use strict';

const express = require('express'); // v4.16.2

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.get('/', function (req, res) {
  res.set('Connection', 'close');
  res.send({ hello: 'world' });
});

app.get('/keep', function (req, res) {
  res.send({ hello: 'connected' });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
