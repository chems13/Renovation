import { devisData } from "../data/FakeData";
import DevisModel from "../model/DevisModel";

class DevisService {
  constructor() {
    this.devis = devisData;
  }

  getAll() {
    return this.devis;
  }

  getById(id) {
    return this.devis.find((d) => d.id_devis === id);
  }

  add(devis) {
    this.devis.push(devis);
  }

  remove(id) {
    this.devis = this.devis.filter((d) => d.id_devis !== id);
  }

  updateStatut(id, newStatut) {
    const devis = this.getById(id);
    if (devis) devis.statut = newStatut;
  }
  onEdit (id){
    const devis = this.devis.find((d) => d.id_devis === id);
    return devis;
  }
}

export default new DevisService();