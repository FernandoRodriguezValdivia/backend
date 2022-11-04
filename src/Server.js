require('colors');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

const userRouter = require('./user/routes');
const mensajeRouter = require('./mensajes/routes');
const handleErrors = require('./middlewares/handleErrors');
const Socket = require('./Socket');

class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, {
      cors: {
        origin: '*',
      },
    });
    this.middlewares();
    this.routes();
    this.socketConfig();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/user', userRouter);
    this.app.use('/api/mensaje', mensajeRouter);
    this.app.use((_req, res) => {
      res.status(404).end();
    });
    this.app.use(handleErrors);
  }

  socketConfig() {
    new Socket(this.io);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`App listening on ${this.port}`);
    });
  }
}

module.exports = Server;
