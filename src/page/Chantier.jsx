import { useState } from "react";
import ChantierCard from "../components/Chantier/ChantierListe";
import ChantierService from "../services/ChantierService";
import ChantierForm from "../components/Chantier/ChantierForm";
import ChantierModel from "../model/ChantierModel";

export default function Chantier() {
  const [chantiers, setChantiers] = useState(ChantierService.getAll());

  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    date_debut: "",
    date_fin: "",
    statut: "",
  });

  const [editingId, setEditingId] = useState(null);

  //Ajout
  const add = () => {
    const newChantier = new ChantierModel(
      Date.now(),
      formData.titre,
      formData.description,
      formData.date_debut,
      formData.date_fin,
      formData.statut,
    );

    ChantierService.add(newChantier);
    setChantiers([...ChantierService.getAll()]);

    resetForm();

    // setFormData({
    //   titre: "",
    //   description: "",
    //   date_debut: "",
    //   date_fin: "",
    //   statut: "",
    // });
  };

  const onEdit = (id) => {
    const chantier = ChantierService.getById(id);
    setFormData({ ...Chantier });
    setEditingId(id);
  };

  //update sauvggarder la modification
  const update = () => {
    const updateChantier = new ChantierModel(
      editingId,
      formData.titre,
      formData.description,
      formData.date_debut,
      formData.date_fin,
      formData.statut,
    );

    ChantierService.update(updateChantier);
    setChantiers([...ChantierService.getAll()]);

    resetForm();
    setEditingId(null);
  };

  //Delete
  const remove = (id) => {
    ChantierService.remove(id);
    setChantiers([...ChantierService.getAll()]);
  };

  //Reset Form
  const resetForm = () => {
    setFormData({
      titre: "",
      description: "",
      date_debut: "",
      date_fin: "",
      statut: "",
    });
  };

  return (
    <section className="container">
      <ChantierForm
        formData={formData}
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
