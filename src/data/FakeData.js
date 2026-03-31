import ChantierModel from "../model/ChantierModel";
import ClientsModel from "../model/ClientsModel";
import DevisModel from "../model/DevisModel";
import CommentaireModel from "../model/CommentaireModel ";

// --- CHANTIERS ---
export const chantiersData = [
  new ChantierModel(1, "chantier1", "Peinture de facade", "2023-01-01", "2023-01-10", "terminee"),
  new ChantierModel(2, "chantier2", "sol", "2024-01-01", "2024-01-10", "en cours"),
  new ChantierModel(3, "chantier3", "carrelage", "2025-01-01", "2025-01-10", "en cours"),
];

// --- CLIENTS ---
export const clientsData = [
  new ClientsModel(1, "Dupont", "Jean", "jean.dupont@gmail.com", "0601020304", "1234"),
  new ClientsModel(2, "Martin", "Sophie", "sophie.martin@gmail.com", "0605060708", "abcd"),
];

// --- DEVIS ---
export const devisData = [
  new DevisModel(1, 1500, "Rénovation salle de bain", "En attente", "2024-01-10"),
  new DevisModel(2, 3200, "Peinture appartement", "Validé", "2024-02-05"),
];

// --- COMMENTAIRES ---
export const commentairesData = [
  new CommentaireModel(1, 5, "Travail impeccable", "2024-03-01"),
  new CommentaireModel(2, 4, "Bon chantier mais un peu de retard", "2024-03-05"),
];