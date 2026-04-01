import img4 from "../../assets/img4.jpg";
export default function ClientsForm({
  formData,
  setFormData,
  add,
  update,
  editingId,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) update();
    else add();
  };

  return (
    <div className="container m-2">
      <div className="row">
        <div className="card p-4 mb-4 col-md-8">
          <h3 className="fw-bold mb-3">
            {editingId ? "Modifier un client" : "Créer un client"}
          </h3>

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
              {editingId ? "modifier" : "Ajouter Client"}
            </button>
          </form>
        </div>

        <div className="col-md-4">
          <section className="p-4 mb-4 card">
            <h3>Nos valeurs</h3>
            <p>
              Parce qu’un chantier réussi commence toujours par une vision
              claire, chaque projet que nous lançons est pensé pour garantir
              sécurité, organisation et efficacité. Dès la création du chantier,
              nos équipes mettent en place des protocoles stricts afin d’assurer
              un environnement de travail maîtrisé et conforme aux normes. La
              coordination des interventions, le suivi permanent et la gestion
              des étapes permettent d’anticiper les imprévus et de maintenir une
              progression fluide. Chaque phase est contrôlée, validée et
              documentée pour offrir un résultat fiable, sécurisé et livré dans
              les temps, sans compromis sur la qualité ni sur la sécurité des
              équipes.
            </p>
            <img
              src={img4}
              alt="chantier"
              className="img-fluid"
              style={{ width: "40% " }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
