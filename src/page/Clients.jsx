import { useState } from "react";
import ClientsForm from "../components/Clients/ClientsForm";
import ClientsCard from "../components/Clients/ClientsCard";
import ClientsService from "../services/ClientsService";
import ClientsModel from "../model/ClientsModel";

export default function Clients() {
  const [clients, setClients] = useState(ClientsService.getAll());

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    mot_de_passe: "",
  });

  const [editingId, setEditingId] = useState(null);

  // ➕ AJOUT
  const add = () => {
    const newClient = new ClientsModel(
      Date.now(),
      formData.nom,
      formData.prenom,
      formData.email,
      formData.telephone,
      formData.mot_de_passe,
    );

    ClientsService.add(newClient);
    setClients([...ClientsService.getAll()]);
    resetForm();
  };

  // ✏️ EDIT (pré-remplir le formulaire)
  const onEdit = (id) => {
    const client = ClientsService.getById(id);

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
  const update = () => {
    const updatedClient = new ClientsModel(
      editingId,
      formData.nom,
      formData.prenom,
      formData.email,
      formData.telephone,
      formData.mot_de_passe,
    );

    ClientsService.update(updatedClient);
    setClients([...ClientsService.getAll()]);
    resetForm();
    setEditingId(null);
  };

  // 🗑️ DELETE
  const remove = (id) => {
    ClientsService.remove(id);
    setClients([...ClientsService.getAll()]);
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
