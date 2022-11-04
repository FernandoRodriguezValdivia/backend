const Mensaje = require('../../models/Mensaje.model')

const getLastMensaje = async( miId, mensajesDe ) => {
    
	try {
		const last30 = await Mensaje.find({
			$or: [
				{ de: miId, para: mensajesDe },
				{ de: mensajesDe, para: miId },
			]
		})
		.sort({ createdAt: 'asc' })
		.limit(30);
		return last30;
		
	} catch (error) {
			console.log(error);
			return false;
	}
}

module.exports = getLastMensaje;