export default class DevisModel {
  constructor(id_devis, montant, description, statut, date_creation) {
    this.id_devis = id_devis;
    this.montant = montant;
    this.description = description;
    this.statut = statut;
    this.date_creation = date_creation;
  }

  toString() {
    return this.id_devis;
  }
}