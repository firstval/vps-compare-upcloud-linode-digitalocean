'use strict';

const express = require('express'); // v4.16.2
const http = require('uws').http; // v8.14.1

const app = http.getExpressApp(express);

app.disable('etag');
app.disable('x-powered-by');

app.get('/', function (req, res) {
  res.set('Connection', 'close');
  res.send({ hello: 'world' });
});

app.get('/keep', function (req, res) {
  res.send({ hello: 'connected' });
});

http.createServer(app).listen(3000, () => {
  console.log('Express UWS modified server listening on port 3000');
});
