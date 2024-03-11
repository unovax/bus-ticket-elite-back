// En index.js
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { connectToDatabase } from './database';
require('dotenv').config();

connectToDatabase(process.env.mongoDBURL ?? "" + process.env.mongoDBName ?? "");

const app = express();

// Configuraciones y middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', routes);

// Iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log('Servidor en ejecución en http://localhost:' + process.env.PORT);
});