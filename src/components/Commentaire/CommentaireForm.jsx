export default function CommentaireForm({ formData, setFormData, add }) {
  // Mise a jour des champs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add();
  };

  return (
    <div className="card p-4 mb-4">
      <h3 className="fw-bold mb-3">Ajouter un commentaire</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="note"
          className="form-control mb-3"
          placeholder="Note sur 5"
          min="1"
          max="5"
          value={formData.note}
          onChange={handleChange}
        />

        <textarea
          name="commentaire"
          className="form-control mb-3"
          placeholder="Votre commentaire"
          value={formData.contenu}
          onChange={handleChange}
        ></textarea>

        <input
          type="date"
          name="date_commentaire"
          className="form-control mb-3"
          value={formData.data_comment}
          onChange={handleChange}
        />

        <input
          type="number"
          name="id_client"
          className="form-control mb-3"
          placeholder="ID du client"
          value={formData.id_client}
          onChange={handleChange}
        />

        <input
          type="number"
          name="id_chantier"
          className="form-control mb-3"
          placeholder="ID du chantier"
          value={formData.id_chantier}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">Ajouter</button>
      </form>
    </div>
  );
}
