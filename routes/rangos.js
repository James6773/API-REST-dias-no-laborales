const {Router} = require('express');
const Rango = require('../models/Rango');
const {validarRangos} = require('../helpers/validar-rangos');
const router = Router();

router.get('/', async function(req, res) {
    
    try {
        const rangos = await Rango.find();
        res.send(rangos);
    } catch (error) {
        console.log(error); 
        res.status(500).send("¡Ocurrió un error en el servidor!");
    }
});

router.post('/', async function(req, res) {
    
    try {

        const validaciones = validarRangos(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones);
        }
        
        let rango = new Rango();

        rango.nombre = req.body.nombre;
        rango.fechaInicio = req.body.fechaInicio ;
        rango.fechaFin = req.body.fechaFin ;

        rango = await rango.save();

        res.send(rango);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('¡Ocurrió un error!');
    }
});

router.put('/:rangoId', async function(req, res) {

    try {

        const validaciones = validarRangos(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        let rango = await Rango.findById(req.params.rangoId);

        if (!rango){
            return res.status(400).send("¡No existe el rango!");
        }
    
        rango.nombre = req.body.nombre;
        rango.fechaInicio = req.body.fechaInicio ;
        rango.fechaFin = req.body.fechaFin ;

        rango = await rango.save();

        res.send(rango);
        
     } catch (error) {
         console.log(error); 
         res.status(500).send("¡Ocurrió un error en el servidor!");
     }
    
});

router.delete('/:rangoId', async function(req, res) {
    try {

        const rango = await Rango.findByIdAndDelete(req.params.rangoId);
        
        if (!rango) {
            return res.status(404).send("¡El rango no existe!");
        }

        res.send("¡El rango fue eliminado con éxito!");

    } catch (error) {
        console.log(error); 
        res.status(500).send("¡Ocurrió un error en el servidor!");
    }
});

router.get('/diasNoLaborales', async function(req, res) {

    try {
    
        let fecha1= req.body.fechaInicio
        let fecha2= req.body.fechaFin

        var contador=0;
             
        contador = await Rango.find({
        fechaInicio: {
            $gte: fecha1,
            $lt: fecha2
        }
        }).count();
            

        res.send("Días no laborales para el rango dado: "+contador); 
    
    } catch (error) {
        console.log(error); 
        res.status(500).send("¡Ocurrió un error en el servidor! "+error);
    }
});

module.exports = router;