export default class CommentaireModel {
  constructor(id_commentaire, note, commentaire, date_commentaire) {
    this.id_commentaire = id_commentaire;
    this.note = note;
    this.commentaire = commentaire;
    this.date_commentaire = date_commentaire;
  }

  toString() {
    return this.id_commentaire;
  }
}