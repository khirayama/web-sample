/* eslint-disable no-console, no-process-exit */
import * as http from 'http';

import express from 'express';
import * as bodyParser from 'body-parser';

import * as renderer from 'server/renderer';

export function runServer() {
  const PORT = process.env.PORT || 3000;
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/public', express.static('dist/public'));
  app.get('*', renderer.get);

  const server = http.createServer(app);

  server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${(addr || { port: PORT }).port}`;

    console.log(`Listening on ${bind}`);
  });

  server.on('error', (err: any) => {
    if (err.syscall !== 'listen') throw err;

    const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

    switch (err.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
      default:
        throw err;
    }
  });

  server.listen(PORT);
}
