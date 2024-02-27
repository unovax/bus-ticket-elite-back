// En index.js
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { PORT, mongoDBURL, mongoDBName } from './config';
import { connectToDatabase } from './database';

connectToDatabase(mongoDBURL + mongoDBName);

const app = express();

// Configuraciones y middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor en ejecución en http://localhost:' + PORT);
});