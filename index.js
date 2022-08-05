const express = require('express');
const {getConnection} = require('./db/db-connection-mongo');
const cors = require('cors');
const app = express();
const helmet = require("helmet")
require('dotenv').config();

const port = process.env.PORT;

getConnection();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  )

app.use('/rangos', require('./routes/rangos'));

app.listen(port, () => {
    console.log(`¡Aplicación corriendo en el puerto ${port}!`);
});