export default class ClientsModel {
  constructor(id_client, nom, prenom, email, telephone, mot_de_passe) {
    this.id_client = id_client;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;
    this.mot_de_passe = mot_de_passe;
  }

  toString() {
    return this.id_client;
  }
}