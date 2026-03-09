const express = require('express');

const connectDatabase = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

connectDatabase();

app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API de pedidos funcionando');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});