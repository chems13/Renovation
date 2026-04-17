import { useState } from "react";
import DevisService from "../services/DevisService";
import DevisForm from "../components/Devis/DevisForm";
import DevisCard from "../components/Devis/DevisCard";
import DevisModel from "../model/DevisModel";

export default function Devis() {
  const [devis, setDevis] = useState(DevisService.getAll());

  const [formData, setFormData] = useState({
    description: "",
    montant: "",
    statut: "",
    date_creation: "",
  });

  const add = () => {
    const newDevis = new DevisModel(
      Date.now(),
      formData.montant,
      formData.description,
      formData.statut,
      formData.date_creation,
    );

    DevisService.add(newDevis);
    setDevis([...DevisService.getAll()]);

    setFormData({
      description: "",
      montant: "",
      statut: "",
      date_creation: "",
    });
  };

  return (
    <section className="container">
      <h2>devis</h2>
      <DevisForm formData={formData} setFormData={setFormData} add={add} />

      <h2 className="mt-4">Liste des devis</h2>
      <DevisCard devis={devis} />
    </section>
  );
}
