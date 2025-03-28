require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const vendasRoutes = require('./routes/vendas');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', vendasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
