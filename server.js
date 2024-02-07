const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./config/database'); // Importa la conexión a la base de datos

const hotelRoutes = require('./src/routes/hotelRoutes');
const roomRoutes = require('./src/routes/roomRoutes');
const seasonRoutes = require('./src/routes/seasonRoutes');
const rateRoutes = require('./src/routes/rateRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/hotels', hotelRoutes);
app.use('/rooms', roomRoutes);
app.use('/seasons', seasonRoutes);
app.use('/rates', rateRoutes);

database.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
database.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
