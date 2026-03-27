import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logo1.jpg";

export default function Layout({ children }) {
  return (
    <div className="containerLayout">
      {/*header*/}
      <header className="d-flex bg-secondary p-3 justify-content-between align-items-center">
        <Link>
          <img src={logo} alt="LOGO" className="" />
        </Link>

        <nav className=" d-flex gap-3 ">
          <Link className="btn btn-success text-white" to="/">
            Home
          </Link>
          <Link className="btn btn-success text-white" to="/Clients">
            client
          </Link>
          <Link className="btn btn-success text-white" to="/Devis">
            devis
          </Link>
          <Link className="btn btn-success text-white" to="/Chantier">
            chantier
          </Link>
        </nav>
      </header>

      {/*main*/}
      <main>{children}</main>

      {/*footer*/}
      <footer className="bg-secondary p-3 mt-4">
        <p className="m-0 text-center">
          &copy; Chantier Renovation ⚒️ - 2026
          <br />
          Votre partenaire de confiance pour tous vos travaux de rénovation.
        </p>
      </footer>
    </div>
  );
}
