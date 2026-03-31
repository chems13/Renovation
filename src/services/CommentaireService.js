import {commentairesData } from "../data/FakeData";
import CommentaireModel from "../model/CommentaireModel ";

class CommentaireService {
  constructor() {
    this.commentaires = commentairesData;
  }

  getAll() {
    return this.commentaires;
  }

  getByChantierId(id_chantier) {
    return this.commentaires.filter(
      (c) => c.id_chantier === id_chantier
    );
  }

  add(commentaire) {
    this.commentaires.push(commentaire);
  }

  remove(id) {
    this.commentaires = this.commentaires.filter(
      (c) => c.id_commentaire !== id
    );
  }
}

export default new CommentaireService();