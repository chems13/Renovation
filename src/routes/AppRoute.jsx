import Chantier from "../page/Chantier";
import Clients from "../page/Clients";
import Devis from "../page/Devis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../page/Home";
import Commentaires from "../page/Commentaires";
import ChantierDetails from "../page/ChantierDetails";

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="chantier" element={<Chantier />} />
            <Route path="/chantier/:id" element={<ChantierDetails />} />
            <Route path="/commentaires" element={<Commentaires />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
