const User = require('./models/User.model');
const { grabarMensaje } = require('./mensajes/services')

class Socket {
  constructor(io) {
    this.io = io;
    this.Events();
  }

  Events() {
    this.io.on('connection', (socket) => {
      const id = socket.handshake.query['x-token']
      if(id){
        socket.join( id );
      }else{
        return socket.disconnect();
      }

      socket.on( 'mensaje-personal', async( payload ) => {
        const mensaje = await grabarMensaje( payload );
        this.io.to( payload.para ).emit( 'mensaje-personal', mensaje );
        this.io.to( payload.de ).emit( 'mensaje-personal', mensaje );
      });

      socket.on('disconnect', () => {
        console.log('desconectado');
      });
    });
  }
}

module.exports = Socket;
