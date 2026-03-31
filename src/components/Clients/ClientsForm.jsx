export default function ClientsForm({ formData, setFormData, add }) {
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
      <h3 className="fw-bold mb-3">Créer un client</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          className="form-control mb-3"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
        />

        <input
          type="text"
          name="prenom"
          className="form-control mb-3"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="telephone"
          className="form-control mb-3"
          placeholder="Téléphone"
          value={formData.telephone}
          onChange={handleChange}
        />

        <input
          type="password"
          name="mot_de_passe"
          className="form-control mb-3"
          placeholder="Mot de passe"
          autoComplete="new-password"
          value={formData.mot_de_passe}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary w-100">
          Ajouter client
        </button>
      </form>
    </div>
  );
}
