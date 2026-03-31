export default class ChantierModel{

    constructor(id_chantier,titre,description,date_debut,date_fin,statut){
        this.id_chantier=id_chantier;
        this.titre=titre;
        this.description=description;
        this.date_debut=date_debut;
        this.date_fin=date_fin;
        this.statut=statut;

    }
        toString(){
            return this.id_chantier;
        }

    
}