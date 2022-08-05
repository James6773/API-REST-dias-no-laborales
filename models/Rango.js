const {Schema, model} = require('mongoose');

const RangoSchema = Schema({
	nombre:{
        type: String,
        require: true,
    }, 
	fechaInicio: {
        type: Date,
        require: true,
    },
	fechaFin:{
        type: Date,
        require: true
    }
});

module.exports = model('Rango', RangoSchema);