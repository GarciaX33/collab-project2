var db = require("../models");

module.exports = function(app) {
  // Get all Reservations
  app.get("/api/pet", function(req, res) {
    db.Pet.findAll({}).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Create a new Reservation
  app.post("/api/pet", function(req, res) {
    db.Pet.create(req.body).then(function(dbPet) {
      res.json(dbPet);
    });
  });

  // Delete an reservation by id
  app.delete("/api/Pet/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(dbPet) {
      res.json(dbPet);
    });
  });
};


db.Pet.create({
  text: "some value",
  des: "sfdj"
}).then(function(dbPet) {
  res.json(dbPet);
});