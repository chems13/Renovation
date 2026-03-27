CREATE TABLE Clients(
   id_client INT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   telephone INT,
   mot_de_passe VARCHAR(50),
   PRIMARY KEY(id_client),
   UNIQUE(telephone)
)ENGINE=INNODB;

CREATE TABLE Devis(
   id_devis INT,
   montant DECIMAL(15,2),
   description VARCHAR(50),
   statut VARCHAR(50),
   date_creation DATE,
   PRIMARY KEY(id_devis)
)ENGINE=INNODB;

CREATE TABLE Chantier(
   id_chantier INT,
   titre VARCHAR(50) NOT NULL,
   description TEXT,
   date_debut DATETIME,
   date_fin DATETIME,
   statut VARCHAR(50),
   id_devis INT NOT NULL,
   id_client INT NOT NULL,
   PRIMARY KEY(id_chantier),
   UNIQUE(id_devis),
   FOREIGN KEY(id_devis) REFERENCES Devis(id_devis),
   FOREIGN KEY(id_client) REFERENCES Clients(id_client)
)ENGINE=INNODB;

CREATE TABLE Commentaire(
   id_commentaire INT,
   note INT,
   commentaire TEXT NOT NULL,
   date_commentaire DATETIME,
   id_chantier INT NOT NULL,
   id_client INT NOT NULL,
   PRIMARY KEY(id_commentaire),
   FOREIGN KEY(id_chantier) REFERENCES Chantier(id_chantier),
   FOREIGN KEY(id_client) REFERENCES Clients(id_client)
)ENGINE=INNODB;
