import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 1000, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const conexion = async () => {
    await mongoose.connect('mongodb://localhost/platos' )
            .then(resp => console.log('DB Conectadosss'))
            .catch(e => console.log('error en conexion DB:', e))
}

export default conexion;