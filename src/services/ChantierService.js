import { chantiersData } from "../data/FakeData";

export class ChantierService{

     constructor() {
        this.chantiers = chantiersData;
     }

    getAll(){
        return this.chantiers;
   }
}