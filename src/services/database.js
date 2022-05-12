import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://guillesapag:mercyful69@cluster0.eh9yf.mongodb.net/basepeliculasterror?retryWrites=true&w=majority' //Lean: lo dejo colocado para que puedas chequear la base de datos de peliculas, en realidad lo tendría que ocultar como dijo el profe.

export const initMongoDB = async () => {
  try {
    console.log(' PROCESO DE CONECCION A MI BASE DE DATOS');
    console.log(connectionString)
    await mongoose.connect(connectionString);

    console.log('CONECCION EFECTUADA CORRECTAMENTE');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};
