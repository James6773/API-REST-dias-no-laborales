const validarRangos = (req) => {
    const validaciones = [];

    if(!req.body.nombre){
        validaciones.push("¡El nombre es requerido!")
    }

    if(!req.body.fechaInicio){
        validaciones.push("¡La fecha de inicio es requerida!")
    }

    if(!req.body.fechaFin){
        validaciones.push("¡La fecha de fin es requerida!")
    }

    return validaciones;
}

module.exports = {
    validarRangos,
}