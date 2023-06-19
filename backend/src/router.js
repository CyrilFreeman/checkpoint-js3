const express = require("express");

const router = express.Router();
const tilesControllers = require("./controllers/TileControllers");
const boatsControllers = require("./controllers/BoatControllers");

router.get("/tiles", tilesControllers.browseTile);
router.get("/boats", boatsControllers.findBoatsByNameOrAll);

router.put("/boats/:id", boatsControllers.editBoat);

// app.put("/boats/:id", tileExists, (req, res) => {
//   // Votre logique de gestion du déplacement du bateau ici
// });

module.exports = router;
