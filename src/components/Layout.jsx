import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";

export default function Layout({ children }) {
  const selectedcolorbtn = ({ isActive }) =>
    `btn text-white ${isActive ? "btn-primary" : "btn-success"} `;
  return (
    <div className="containerLayout">
      {/*header*/}
      <header className="d-flex bg-secondary p-3 justify-content-between align-items-center">
        <Link>
          <img src={logo} alt="LOGO" className="" style={{ width: "5%" }} />
        </Link>

        <nav className=" d-flex gap-3 ">
          <NavLink className={selectedcolorbtn} to="/">
            Home
          </NavLink>
          <NavLink className={selectedcolorbtn} to="/Clients">
            client
          </NavLink>
          <NavLink className={selectedcolorbtn} to="/Devis">
            devis
          </NavLink>
          <NavLink className={selectedcolorbtn} to="/Chantier">
            chantier
          </NavLink>
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
