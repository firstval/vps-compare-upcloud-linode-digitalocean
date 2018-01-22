'use strict';

const fastify = require('fastify')(); // v0.33.0

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/', schema, function (request, reply) {
  reply.header('Connection', 'close');
  reply.send({ hello: 'world' });
});

fastify.get('/keep', schema, function (request, reply) {
  reply.send({ hello: 'connected' });
});

fastify.listen(3000, err => {
  if (err) throw err;
  console.log('Fastify server listening on port 3000')
});
