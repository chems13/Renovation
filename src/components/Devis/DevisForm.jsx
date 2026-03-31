export default function DevisForm({ formData, setFormData, add }) {
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
    // FORMULAIRE DEVIS

    <div className="card p-4 mb-4">
      <h3 className="fw-bold mb-3">Créer un devis</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control mb-3"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="montant"
          className="form-control mb-3"
          placeholder="Montant"
          value={formData.montant}
          onChange={handleChange}
        />

        <select
          name="statut"
          className="form-select mb-3"
          value={formData.statut}
          onChange={handleChange}
        >
          <option value="">Choisir...</option>
          <option value="En attente">En attente</option>
          <option value="Validé">Validé</option>
          <option value="Refusé">Refusé</option>
        </select>

        <input
          type="date"
          name="date_creation"
          className="form-control mb-3"
          value={formData.date_creation}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">Ajouter</button>
      </form>
    </div>
  );
}
