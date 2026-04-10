export default function ChantierForm({
  formData,
  clients,
  setFormData,
  add,
  update,
  editingId,
}) {
  // Mise à jour des champs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      update();
    } else {
      add();
    }
  };

  return (
    <div className="card shadow-lg p-4 m-4">
      <h3 className="fw-bold mb-3">
        {editingId ? "Modifier un chantier" : "Créer un chantier"}
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Titre */}
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            placeholder="Ex : Rénovation cuisine"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez les travaux"
          ></textarea>
        </div>

        {/* Date début */}
        <div className="mb-3">
          <label className="form-label">Date de début</label>
          <input
            type="date"
            className="form-control"
            name="date_debut"
            value={formData.date_debut}
            onChange={handleChange}
          />
        </div>

        {/* Date fin */}
        <div className="mb-3">
          <label className="form-label">Date de fin</label>
          <input
            type="date"
            className="form-control"
            name="date_fin"
            value={formData.date_fin}
            onChange={handleChange}
          />
        </div>

        {/* Statut */}
        <div className="mb-3">
          <label className="form-label">Statut</label>
          <select
            className="form-select"
            name="statut"
            value={formData.statut}
            onChange={handleChange}
          >
            <option value="">Choisir...</option>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            name="id_client"
            id=""
            className="form-select"
            onChange={handleChange}
          >
            <option>Choisir un client....</option>
            {clients.map((client) => (
              <option key={client.id_client} value={client.id_client}>
                {client.nom} {client.prenom}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton */}
        <button type="submit" className="btn btn-primary w-100">
          {editingId ? "Modifier le chantier" : "Ajouter le chantier"}
        </button>
      </form>
    </div>
  );
}
