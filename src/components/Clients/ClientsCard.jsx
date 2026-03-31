export default function ClientsCard({ clients }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client) => (
          <tr key={client.id_client}>
            <td>{client.nom}</td>
            <td>{client.prenom}</td>
            <td>{client.email}</td>
            <td>{client.telephone}</td>
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
