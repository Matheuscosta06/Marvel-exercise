# Batalha de herois ⚔️

![war](https://github.com/Matheuszambondacosta/Marvel-exercise/assets/123407442/5e5adb8c-5069-42e8-945b-f27e33647153)

## Introdução
Este é um aplicativo simples para gerenciar heróis e realizar batalhas entre eles no universo Marvel. Ele utiliza Node.js com o framework Express e se integra a um banco de dados PostgreSQL para persistência dos dados.

## Funções do código:
Este sistema permite gerenciar heróis, realizar batalhas entre eles e visualizar o histórico de batalhas ocorridas, tudo isso por meio de uma API RESTful utilizando Node.js e Express, com integração ao PostgreSQL para persistência dos dados.

## Rotas e Funcionalidades:

GET /herois
Retorna todos os heróis cadastrados no banco de dados.
GET /herois/:id
Retorna os detalhes de um herói específico com base no ID fornecido.
POST /herois
Adiciona um novo herói ao banco de dados. Espera um objeto JSON no corpo da requisição contendo informações do novo herói (nome, poder, nível, dano, pontos de vida).
PUT /herois/:id
Atualiza os detalhes de um herói existente com base no ID fornecido. Espera um objeto JSON no corpo da requisição com os novos dados do herói.
DELETE /herois/:id
Deleta um herói existente com base no ID fornecido.
GET /batalha/:heroi1id/:heroi2id
Inicia uma batalha entre dois heróis específicos com base nos IDs fornecidos. Realiza uma consulta ao banco de dados para obter os detalhes dos heróis.
GET /winner/:id1/:id2
Determina o vencedor de uma batalha entre dois heróis com base nos IDs fornecidos. Usa a função batalhafunc para comparar os danos dos heróis e retornar o vencedor.
GET /historico
Retorna o histórico de todas as batalhas ocorridas, mostrando os detalhes das batalhas (nomes dos heróis e vencedores).
GET /historico/nome/:nome
Retorna o histórico de batalhas de um herói específico com base no nome fornecido. Realiza uma consulta ao banco de dados para encontrar todas as batalhas em que o herói participou.
GET /
Rota raiz que exibe uma mensagem de boas-vindas.

## Funções Auxiliares
batalhafunc(heroi01, heroi02)
Uma função assíncrona que compara os danos de dois heróis e determina o vencedor com base no dano. Retorna o objeto do herói vencedor ou null em caso de empate.

## Execução
Para executar este sistema:

Certifique-se de ter o Node.js instalado em seu ambiente.
Configure um banco de dados PostgreSQL local com as credenciais fornecidas no código.
Clone este repositório e instale as dependências usando npm install.
Inicie o servidor com npm start.
Acesse http://localhost:3000 em seu navegador para interagir com o sistema.


## Criação dos databases e inserts usados: 
CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    power VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    dano INT NOT NULL,
    hp INT NOT NULL
);

CREATE TABLE batalhas (
    id SERIAL PRIMARY KEY,
    hero1_id INT NOT NULL,
    hero2_id INT NOT NULL,
    winner_id INT,
    FOREIGN KEY (hero1_id) REFERENCES Herois(id),
    FOREIGN KEY (hero2_id) REFERENCES Herois(id),
    FOREIGN KEY (winner_id) REFERENCES Herois(id)
);

INSERT INTO herois (name, power, level, dano, hp) VALUES ('Superman', 'Super Força', 11, 100, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Batman', 'Inteligência', 10, 40, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Flash', 'Velocidade', 9, 60, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Aquaman', 'Super Força', 14, 70, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Lanterna Verde', 'Anel', 8, 80, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Ciborgue', 'Tecnologia', 11, 70, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Shazam', 'Super Força', 12, 100, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Arqueiro Verde', 'Arco e Flecha', 13,70, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Mulher Maravilha', 'Super Força', 15, 90, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Mulher Gavião', 'Asas', 10, 60, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Mulher Gato', 'Agilidade', 10, 50, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Mulher Invisível', 'Invisibilidade', 10, 50, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Homem de Ferro', 'Armadura', 10, 70, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Thor', 'Martelo', 11, 80, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Hulk', 'Super Força', 12, 100, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Homem Aranha', 'Teia', 13, 60, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Capitão América', 'Escudo', 14, 70, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Pantera Negra', 'Agilidade', 15, 80, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Doutor Estranho', 'Magia', 16, 90, 100);
INSERT INTO herois (name, power, level, dano, hp) VALUES ('Viúva Negra', 'Artes Marciais', 17, 70, 100);

