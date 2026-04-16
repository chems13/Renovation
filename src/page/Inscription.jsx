import React, { useState } from "react";
import { inscriptionUser } from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Inscription() {
  const [form, setForm] = useState({
    prenom: "",
    login: "",
    mdp: "",
    role: "USER",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await inscriptionUser(form);
      console.log("Utilisateur créé:", user);
      alert("inscription reussie !");
    } catch (error) {
      alert(error.msg || "erreur serveur");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="prenom" placeholder="prenom" onChange={handleChange} />
      <input name="login" placeholder="login" onChange={handleChange} />
      <input
        name="mdp"
        type="password"
        placeholder="mot de passe"
        onChange={handleChange}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
