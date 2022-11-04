const Mensaje = require('../../models/Mensaje.model')

const grabarMensaje = async( payload ) => {
    
	try {
		const mensaje = new Mensaje( payload );
		await mensaje.save();
		return mensaje;
	} catch (error) {
			console.log(error);
			return false;
	}
}

module.exports = grabarMensaje;