import { useEffect, useState } from "react";
import ClientsForm from "../components/Clients/ClientsForm";
import ClientsCard from "../components/Clients/ClientsCard";
import ClientsService from "../services/ClientsService";

export default function Clients() {
  const [clients, setClients] = useState([]);

  //charger les clients depuis l'api
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const data = await ClientsService.getAll();
    setClients(data);
  };

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    mot_de_passe: "",
  });

  const [editingId, setEditingId] = useState(null);

  // ➕ AJOUT
  const add = async () => {
    await ClientsService.add(formData);
    await fetchClients();
    resetForm();
  };

  //✏️edit (pré-remplir le formulaire)
  const onEdit = async (id) => {
    const client = await ClientsService.getById(id);

    setFormData({
      nom: client.nom,
      prenom: client.prenom,
      email: client.email,
      telephone: client.telephone,
      mot_de_passe: client.mot_de_passe,
    });

    setEditingId(id);
  };

  // 💾 UPDATE
  const update = async () => {
    await ClientsService.update(editingId, formData);
    await fetchClients();
    resetForm();
    setEditingId(null);
  };
  // 🗑️ DELETE
  const remove = async (id) => {
    await ClientsService.remove(id);
    await fetchClients();
  };

  // 🔄 RESET FORM
  const resetForm = () => {
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      mot_de_passe: "",
    });
  };

  return (
    <div className="container my-5">
      <ClientsForm
        formData={formData}
        setFormData={setFormData}
        add={add}
        update={update}
        editingId={editingId}
      />

      <h2 className="fw-bold text-center mb-4">Liste des clients</h2>

      <ClientsCard clients={clients} onDelete={remove} onEdit={onEdit} />
    </div>
  );
}
