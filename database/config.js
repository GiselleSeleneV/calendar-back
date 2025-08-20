const mongoose = require('mongoose');

const dbConection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('DB online')

    } catch (err) {
        console.log({ err })
        throw new Error('Error al inicializar base de datos')
    }
}

module.exports = {
    dbConection
}