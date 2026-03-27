import ChantierCard from "../components/Chantier/Chantierliste";
import ChantierService from "../services/ChantierService";

export default function Chantier() {
  const chantiers = ChantierService().getAll();
  return (
    <>
      <section className="container">
        liste des chantiers
        <ChantierCard chantiers={chantiers} />
      </section>
    </>
  );
}
