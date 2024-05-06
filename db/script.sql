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
    winner_id INT NOT NULL,
    FOREIGN KEY (hero1_id) REFERENCES Herois(id),
    FOREIGN KEY (hero2_id) REFERENCES Herois(id),
    FOREIGN KEY (winner_id) REFERENCES Herois(id)
);