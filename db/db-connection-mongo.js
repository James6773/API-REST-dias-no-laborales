const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        console.log("Inicializando llamado a la base de datos...");
    await mongoose.connect('mongodb+srv://James6773:Santi6773@cluster0.pgzhu.mongodb.net/dias-no-laborales?retryWrites=true&w=majority');
        console.log("¡Conexión exitosa con la base de datos!");
    } catch(error) {
        console.log("¡Falló la conexión con la base de datos! ");
        console.log(error);
    }
}

module.exports = {
    getConnection,
}

