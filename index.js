const express = require('express');
const { dbConection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const app = express();

//base de datos
dbConection();

app.use(cors());

app.use(express.static('public'));

//lectura del body
app.use(express.json());

app.use('/api/auth', require('./rutes/auth')); //autenticacion
app.use('/api/events', require('./rutes/events')); //eventos del calendario

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});