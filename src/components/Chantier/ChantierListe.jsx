import { ChantierService } from "../../services/ChantierService";
export default function ChantierCard() {
  const chantierService = new ChantierService();
  const chantiers = chantierService.getAll();
  console.log(chantiers);

  return (
    <>
      <table className="table table-strepid">
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Date debut</th>
          <th>Date fin</th>
          <th>Statut</th>
        </tr>
        {chantiers.map((chantier) => (
          <tr key={chantier.id_chantier}>
            <td>{chantier.titre}</td>
            <td>{chantier.description}</td>
            <td>{chantier.date_debut}</td>
            <td>{chantier.date_fin}</td>
            <td>{chantier.statut}</td>
          </tr>
        ))}
        <button>Modifier</button>
        <button>Supprimer</button>
      </table>
    </>
  );
}
