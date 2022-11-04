const Mensaje = require('../../models/Mensaje.model');
const { getLastMensaje } = require('../services')

const obtenerChat = async( req, res ) => {
  const miId = req.id;
  const mensajesDe = req.params.de;
  const last30 = await getLastMensaje(miId, mensajesDe)
  res.json({ ok: true, mensajes: last30 });
}

module.exports = obtenerChat;
