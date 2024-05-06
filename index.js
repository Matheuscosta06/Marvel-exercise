const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 9876;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'marvel',
  password: 'ds564',
  port: 7007,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu app!');
});






















app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`);
});
