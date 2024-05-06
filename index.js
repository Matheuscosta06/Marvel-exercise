const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'marvel',
  password: 'ds564',
  port: 7007,
});


app.use(express.json());

// const batalha = (heroi1, heroi2) => {
//   const dano1 = heroi1.dano * heroi1.level;
//   const dano2 = heroi2.dano * heroi2.level;
//   const hp1 = heroi1.hp * heroi1.level;
//   const hp2 = heroi2.hp * heroi2.level;

//   while (hp1 > 0 && hp2 > 0) {
//     hp2 -= dano1;
//     if (hp2 <= 0) {
//       return heroi1.name;
//     }
//     hp1 -= dano2;
//     if (hp1 <= 0) {
//       return heroi2.name;
//     }
//   }
// }

// app.get('/batalha/:id1/:id2', async (req, res) => {
//   const { id1, id2 } = req.params;
//   try {
//     const { rows: heroi1 } = await pool.query('SELECT * FROM herois WHERE id = $1', [id1]);
//     const { rows: heroi2 } = await pool.query('SELECT * FROM herois WHERE id = $1', [id2]);
//     const resultado = batalha(heroi1[0], heroi2[0]);
//     res.send(`O vencedor é: ${resultado}`);
//   } catch (error) {
//     res.status(500).send('Erro ao buscar herois');
//   }
// }
// );

// app.post('/historico', async (req, res) => {
//   const { id1, id2, vencedor } = req.body;
//   try {
//     await pool.query('INSERT INTO historico (id1, id2, vencedor) VALUES ($1, $2, $3)', [id1, id2, vencedor]);
//     res.send('Historico adicionado com sucesso');
//   } catch (error) {
//     res.status(500).send('Erro ao adicionar historico');
//   }
// }
// );


// app.get('/historico', async (req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM historico');
//     res.send(rows);
//   } catch (error) {
//     res.status(500).send('Erro ao buscar historico');
//   }
// }
// );
  


app.get('/herois', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM herois');
    res.send(rows);
  } catch (error) {
    res.status(500).send('Erro ao buscar herois');
  }

}
);

app.get('/herois/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500).send('Erro ao buscar heroi');
  }
});

app.post('/herois', async (req, res) => {
  const { name, power, level, dano, hp } = req.body;
  try {
    await pool.query('INSERT INTO herois (name, power, level, dano, hp) VALUES ($1, $2, $3, $4, $5)', [name, power, level, dano, hp]);
    res.send('Heroi adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar heroi');
  }
}
);

app.put('/herois/:id', async (req, res) => {
  const { id } = req.params;
  const { name, power, level, dano, hp } = req.body;
  try {
    await pool.query('UPDATE herois SET name = $1, power = $2, level = $3, dano = $4, hp = $5 WHERE id = $6', [name, power, level, dano, hp, id]);
    res.send('Heroi atualizado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar heroi');
  }
}
);

app.delete('/herois/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM herois WHERE id = $1', [id]);
    res.send('Heroi deletado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar heroi');
  }
}
);

















app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu app!');
});






















app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`);
});
