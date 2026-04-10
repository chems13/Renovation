import { useEffect, useState } from "react";
import ChantierCard from "../components/Chantier/ChantierListe";
import ChantierService from "../services/ChantierService";
import clientService from "../services/clientsService";
import ChantierForm from "../components/Chantier/ChantierForm";

export default function Chantier() {
  const [chantiers, setChantiers] = useState([]);
  const [clients, setClients] = useState([]);

  const fetchChantiers = async () => {
    const data = await ChantierService.getAll();
    setChantiers(data);
  };

  useEffect(() => {
    const load = async () => {
      const data = await ChantierService.getAll();
      setChantiers(data);
      setClients(await clientService.getAll());
    };
    load();
  }, []);

  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    date_debut: "",
    date_fin: "",
    statut: "",
    id_client: "",
  });
  const [editingId, setEditingId] = useState(null);

  //Ajouter
  const add = async () => {
    await ChantierService.add(formData);
    await fetchChantiers();
    resetForm();
  };

  //Edit pré-remplir le formulaire
  const onEdit = async (id) => {
    const chantier = await ChantierService.getById(id);

    setFormData({
      titre: chantier.titre,
      description: chantier.description,
      date_debut: chantier.date_debut,
      date_fin: chantier.date_fin,
      statut: chantier.statut,
      id_client: chantier.id_client,
    });

    setEditingId(id);
  };

  //update
  const update = async () => {
    await ChantierService.update(editingId, formData);
    await fetchChantiers();
    resetForm();
    setEditingId(null);
  };

  //Delete
  const remove = async (id) => {
    await ChantierService.remove(id);
    await fetchChantiers();
  };

  //Reset Form
  const resetForm = () => {
    setFormData({
      titre: "",
      description: "",
      date_debut: "",
      date_fin: "",
      statut: "",
      id_client: "",
    });
  };

  return (
    <section className="container">
      <ChantierForm
        formData={formData}
        clients={clients}
        setFormData={setFormData}
        add={add}
        update={update}
        editingId={editingId}
      />

      <h2>liste des chantiers</h2>

      <ChantierCard chantiers={chantiers} onDelete={remove} onEdit={onEdit} />
    </section>
  );
}
