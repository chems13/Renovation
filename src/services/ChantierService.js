import { chantiersData } from "../data/FakeData";
import ChantierModel from "../model/ChantierModel";

class ChantierService{

     constructor() {
        this.chantiers = chantiersData;
     }

    getAll(){
        return this.chantiers;
   }

   getById(id) {
    return this.chantiers.find((chantier) => chantier.id_chantier === id);
  }

  remove(id){
    this.chantiers = this.chantiers.filter(
      (chantiers) => chantiers.id_chantier !== id);
  }

  add(chantier){
    this.chantiers.push(chantier);
  }

  update(updatedChantier) {
    const index = this.chantiers.findIndex((chantier) => chantier.id_chantier === updatedChantier.id_chantier);
    if (index !== -1) {
      this.chantiers[index] = updatedChantier;
    }
  }
  onEdit(id) {
    const chantier = this.chantiers.find((c) => c.id_chantier === id);
    return chantier;
  }
}
export default new ChantierService();