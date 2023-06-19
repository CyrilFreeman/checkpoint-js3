const models = require("../models");

const findBoatsByNameOrAll = (req, res) => {
  const boatName = req.query.name;
  if (boatName) {
    models.boat
      .findByName(boatName)
      .then((boat) => {
        if (boat[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(boat[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    models.boat
      .findAll()
      .then(([boat]) => {
        res.send(boat);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const editBoat = (req, res) => {
  const item = req.body;
  console.warn(item);

  // TODO validations (length, format...)

  item.id = parseInt(req.params.id, 10);

  models.boat
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  findBoatsByNameOrAll,
  editBoat,
};
