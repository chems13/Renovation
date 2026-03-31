export default function DevisCard({ devis }) {
  return (
    // TABLEAU DEVIS
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Montant</th>
          <th>Statut</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {devis.map((d) => (
          <tr key={d.id_devis}>
            <td>{d.description}</td>
            <td>{d.montant} €</td>
            <td>{d.statut}</td>
            <td>{d.date_creation}</td>
            <td>
              <button className="btn btn-success me-2">Modifier</button>
              <button className="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
