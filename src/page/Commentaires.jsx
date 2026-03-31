import { useState } from "react";
import CommentaireService from "../services/CommentaireService";
import CommentaireForm from "../components/Commentaire/CommentaireForm";
import CommentaireCard from "../components/Commentaire/CommentaireCard";
import CommentaireModel from "../model/CommentaireModel";

export default function Commentaires() {
  const [commentaires, setCommentaires] = useState(CommentaireService.getAll());

  const [formData, setFormData] = useState({
    note: "",
    commentaire: "",
    date_commentaire: "",
  });

  const add = () => {
    const newCommentaire = new CommentaireModel(
      Date.now(),
      formData.note,
      formData.commentaire,
      formData.date_commentaire,
    );

    CommentaireService.add(newCommentaire);
    setCommentaires([...CommentaireService.getAll()]);

    setFormData({
      note: "",
      commentaire: "",
      date_commentaire: "",
    });
  };

  return (
    <section className="container">
      <CommentaireForm
        formData={formData}
        setFormData={setFormData}
        add={add}
      />

      <h2 className="mt-4">Liste des commentaires</h2>
      <CommentaireCard commentaires={commentaires} />
    </section>
  );
}
