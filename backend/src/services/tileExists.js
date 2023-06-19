/* eslint-disable camelcase */
const db = require("../models");

// Exporter le middleware
module.exports = async function tileExists(req, res, next) {
  try {
    const { coord_x, coord_y } = req.body;

    // Vérifier si la tuile existe dans la base de données
    const tile = await db.Tile.findOne({ coord_x, coord_y });

    if (tile) {
      // La tuile existe, passez au middleware suivant
      next();
    } else {
      // La tuile n'existe pas, renvoyer un statut d'erreur
      res.status(422).json({ error: "La tuile de destination n'existe pas." });
    }
  } catch (error) {
    // Gérer les erreurs de la base de données ou d'autres erreurs
    res.status(500).json({
      error: "Une erreur est survenue lors de la vérification de la tuile.",
    });
  }
};
