CREATE TABLE Herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    power VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    dano INT NOT NULL,
    hp INT NOT NULL
);

CREATE TABLE Batalhas (
    id SERIAL PRIMARY KEY,
    hero1_id INT NOT NULL,
    hero2_id INT NOT NULL,
    winner_id INT,
    FOREIGN KEY (hero1_id) REFERENCES Herois(id),
    FOREIGN KEY (hero2_id) REFERENCES Herois(id),
    FOREIGN KEY (winner_id) REFERENCES Herois(id)
);

INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Superman', 'Super Força', 11, 100, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Batman', 'Inteligência', 10, 40, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Flash', 'Velocidade', 9, 60, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Aquaman', 'Super Força', 14, 70, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Lanterna Verde', 'Anel', 8, 80, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Ciborgue', 'Tecnologia', 11, 70, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Shazam', 'Super Força', 12, 100, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Arqueiro Verde', 'Arco e Flecha', 13,70, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Mulher Maravilha', 'Super Força', 15, 90, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Mulher Gavião', 'Asas', 10, 60, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Mulher Gato', 'Agilidade', 10, 50, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Mulher Invisível', 'Invisibilidade', 10, 50, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Homem de Ferro', 'Armadura', 10, 70, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Thor', 'Martelo', 11, 80, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Hulk', 'Super Força', 12, 100, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Homem Aranha', 'Teia', 13, 60, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Capitão América', 'Escudo', 14, 70, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Pantera Negra', 'Agilidade', 15, 80, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Doutor Estranho', 'Magia', 16, 90, 100);
INSERT INTO Herois (name, power, level, dano, hp) VALUES ('Viúva Negra', 'Artes Marciais', 17, 70, 100);