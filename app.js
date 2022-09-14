const mongoose = require('mongoose');

try {
    // Conexiòn a la base de datos (test_mongo)
    mongoose.connect('mongodb://localhost:27017/test_mongo', (err) => {
        if (err) throw err;
        console.log('Database connection sucessfully!');
    })

    // Crear los esquemas de nuestra base de datos
    const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        phone: String,
    })

    // Crear el modelo para interactuar con la coleccion 
    const User = mongoose.model('User', userSchema);

    // Crear un nuevo usuario (documento) dentro de la coleccion
    
    const user = new User({
        //name: 'Luis Rodriguez',
        phone: '+569XXXXXXXX'
    })

    user.save((err) => {
        if (err) throw err;
        console.log('User created!');
    });
   
    // Buscar elemento dentro de la coleccion

    //const user = User.find({ name: 'Luis Rodriguez' })

    // console.log(user);

    // Update User

    /* user.update({ phone: '+56912345566'}).exec((err) => {
        if (err) throw err;
        console.log('User updated!');
    }) */


} catch (error) {
    console.log(error.message)
} finally {
    //mongoose.disconnect();
} 