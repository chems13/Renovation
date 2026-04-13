import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChantierService from "../services/ChantierService";

export default function ChantierDetails() {
  const { id } = useParams();
  const [chantier, setChantier] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await ChantierService.getById(id);
      setChantier(data);
    };

    load();
  }, [id]);

  if (!chantier) return <p>Chargement ... </p>;
  return (
    <section className="container mt-4">
      <h2>Details du chantier</h2>

      <div className="card p-4">
        <h3>{chantier.titre}</h3>
        <p>{chantier.description}</p>

        <p>
          <strong>Date de debut :</strong>
          {chantier.date_debut}
        </p>
        <p>
          <strong>Date de fin :</strong>
          {chantier.date_fin}
        </p>
        <p>
          <strong>Statut :</strong>
          {chantier.statut}
        </p>
        <p>
          <strong>ID Client :</strong>
          {chantier.id_client}
        </p>
      </div>
    </section>
  );
}
