import { useState } from "react";
import ClientsForm from "../components/Clients/ClientsForm";
import ClientsCard from "../components/Clients/ClientsCard";
import ClientsService from "../services/ClientsService";
import ClientsModel from "../model/ClientsModel";

export default function Clients() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    mot_de_passe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Créer un compte client</h2>

      {/* FORMULAIRE CLIENT */}
      <div className="card shadow-lg p-4 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Prénom</label>
              <input
                type="text"
                className="form-control"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Votre prénom"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">E‑mail</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@mail.com"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Téléphone</label>
              <input
                type="tel"
                className="form-control"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                name="mot_de_passe"
                value={formData.mot_de_passe}
                onChange={handleChange}
                placeholder="Votre mot de passe"
              />
            </div>

            <div className="col-12 text-center mt-3">
              <button type="submit" className="btn btn-primary px-4 py-2">
                Enregistrer le client
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* DASHBOARD CLIENT */}
      <h2 className="fw-bold text-center mb-4">Espace Client</h2>

      {/* Informations du client */}
      <div className="card shadow-sm p-3 mb-4">
        <h4 className="fw-bold">Mes informations</h4>
        <p>
          <strong>Nom :</strong> Dupont
        </p>
        <p>
          <strong>Email :</strong> dupont@mail.com
        </p>
        <p>
          <strong>Téléphone :</strong> 06 12 34 56 78
        </p>
      </div>

      {/* Devis */}
      <div className="card shadow-sm p-3 mb-4">
        <h4 className="fw-bold mb-3">Mes devis</h4>
        <div className="list-group">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Devis #2024-001</h5>
              <p className="mb-1">
                Statut : <span className="badge bg-warning">En attente</span>
              </p>
              <p className="mb-1">Montant : 4 500 €</p>
            </div>
            <button className="btn btn-success">Accepter le devis</button>
          </div>
        </div>
      </div>

      {/* Chantiers */}
      <div className="card shadow-sm p-3 mb-4">
        <h4 className="fw-bold mb-3">Mes chantiers</h4>
        <div className="list-group">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Rénovation Salle de Bain</h5>
              <p className="mb-1">
                Statut : <span className="badge bg-success">Terminé</span>
              </p>
              <div
                className="progress"
                style={{ height: "8px", width: "200px" }}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <button className="btn btn-primary">Voir le chantier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
