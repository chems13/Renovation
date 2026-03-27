import Chantier from "../page/Chantier";
import Clients from "../page/Clients";
import Devis from "../page/Devis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element="" />
            <Route path="/clients" element={<Clients />} />
            <Route path="/chantier" element={<Chantier />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
