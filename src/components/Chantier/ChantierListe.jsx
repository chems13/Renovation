import ChantierService from "../../services/ChantierService";
import { useNavigate } from "react-router-dom";

export default function ChantierCard({ chantiers, onDelete, onEdit }) {
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
                <button
                  className="btn btn-success me-2"
                  onClick={() => onEdit(chantier.id_chantier)}
                >
                  Modifier🖊️
                </button>

                <button
                  className="btn btn-danger me-2"
                  onClick={() => onDelete(chantier.id_chantier)}
                >
                  Supprimer🗑️
                </button>

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
