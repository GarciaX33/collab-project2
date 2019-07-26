var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Reservation.findAll({}).then(function(dbReservations) {
      res.render("index", {
        msg: "Welcome!",
        reservations: dbReservations
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/reservation/:id", function(req, res) {
    db.Reservation.findOne({ where: { id: req.params.id } }).then(function(dbReservation) {
      res.render("reservation", {
        reservation: dbReservation
      });
    });
  });


  app.get ("/login", function(req, res){
    res.render("login.handlebars", {}) 

  app.get("/reservation", function(req, res){
    res.render("reservation")

  })

  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
