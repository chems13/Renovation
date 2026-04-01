import ClientsService from "../../services/ClientsService";
export default function ClientsCard({ clients, onDelete, onEdit }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Actions</th>
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
              <button
                className="btn btn-success me-2"
                onClick={() => onEdit(client.id_client)}
              >
                Modifier🖊️
              </button>

              <button
                className="btn btn-danger"
                onClick={() => onDelete(client.id_client)}
              >
                Supprimer🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
