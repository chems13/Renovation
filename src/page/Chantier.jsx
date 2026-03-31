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

    setFormData({
      titre: "",
      description: "",
      date_debut: "",
      date_fin: "",
      statut: "",
    });
  };

  const remove = (id) => {
    ChantierService.remove(id);
    setChantiers([...ChantierService.getAll()]);
  };

  return (
    <section className="container">
      <ChantierForm formData={formData} setFormData={setFormData} add={add} />

      <h2>liste des chantiers</h2>

      <ChantierCard chantiers={chantiers} onDelete={remove} />
    </section>
  );
}
