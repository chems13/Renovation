import ChantierService from "../../services/ClientsService.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function ChantierCard({ chantiers, onDelete, onEdit }) {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Date debut</th>
            <th>Date fin</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {chantiers.map((chantier) => (
            <tr key={chantier.id_chantier}>
              <td>{chantier.titre}</td>
              <td>{chantier.description}</td>
              <td>{chantier.date_debut}</td>
              <td>{chantier.date_fin}</td>
              <td>{chantier.statut}</td>
              <td>
                {isAdmin && (
                  <>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => onEdit(chantier.id_chantier)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(chantier.id_chantier)}
                    >
                      Delete
                    </button>
                  </>
                )}

                <button
                  className="btn btn-info me-2"
                  onClick={() => navigate(`/chantier/${chantier.id_chantier}`)}
                >
                  Details chantier 👀
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
