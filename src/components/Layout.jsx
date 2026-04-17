import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.jpg";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { isConnected, isAdmin, logout, user } = useAuth();

  const selectedcolorbtn = ({ isActive }) =>
    `btn text-white ${isActive ? "btn-primary" : "btn-success"} `;

  return (
    <div className="containerLayout">
      {/* HEADER */}
      <header className="d-flex bg-secondary p-3 justify-content-between align-items-center">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="LOGO" style={{ width: "5%" }} />
        </Link>

        {/* NAVIGATION */}
        <nav className="d-flex gap-3">
          {/* Si NON connecté → bouton Connexion */}
          {!isConnected && (
            <>
              <NavLink className={selectedcolorbtn} to="/login">
                Connexion
              </NavLink>
              {/*si connecté → bouton Deconnexion */}

              <NavLink className={selectedcolorbtn} to="/inscription">
                Inscription
              </NavLink>
            </>
          )}

          {/* Liens */}
          <NavLink className={selectedcolorbtn} to="/">
            Home
          </NavLink>

          <NavLink className={selectedcolorbtn} to="/clients">
            Clients
          </NavLink>

          {isConnected && (
            <NavLink className={selectedcolorbtn} to="/devis">
              Devis
            </NavLink>
          )}

          <NavLink className={selectedcolorbtn} to="/chantier">
            Chantier
          </NavLink>

          {/* Bouton Admin si ADMIN */}
          {isAdmin && (
            <NavLink className={selectedcolorbtn} to="/admin">
              Admin
            </NavLink>
          )}

          {isConnected && (
            <>
              <button className="btn btn-primary" onClick={logout}>
                Deconnexion
              </button>
              <span className="text-white">Bonjour {user?.prenom}</span>
            </>
          )}
        </nav>
      </header>

      {/* MAIN */}
      <main>{children}</main>

      {/* FOOTER */}
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
