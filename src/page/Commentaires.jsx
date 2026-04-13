import { useState, useEffect } from "react";
import CommentaireService from "../services/CommentaireService";
import CommentaireForm from "../components/Commentaire/CommentaireForm";
import CommentaireCard from "../components/Commentaire/CommentaireCard";

export default function Commentaires() {
  //useState pour stocker les commentaires
  const [commentaires, setCommentaires] = useState([]);

  //Get tous les commentaires
  const fetchCommentaires = async () => {
    const data = await CommentaireService.getAll();
    setCommentaires(data);
  };
  //use Effect pour charger les commentaires
  useEffect(() => {
    const load = async () => {
      const data = await CommentaireService.getAll();
      setCommentaires(data);
    };
    load();
  }, []);

  //useState pour stocker le formulaire
  const [formData, setFormData] = useState({
    note: "",
    contenu: "",
    date_comment: "",
    id_client: "",
    id_chantier: "",
  });

  const add = async () => {
    await CommentaireService.add(formData);
    await fetchCommentaires();

    setFormData({
      note: "",
      commentaire: "",
      date_comment: "",
      id_client: "",
      id_chantier: "",
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
