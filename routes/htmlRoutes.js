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
  
  //Reservation
  app.get("/reservation", function(req, res){

    db.Pet.findAll({where:{UserId:req.user.id}}).then(function(petData){
      //var petData=[{id:1,petName:"Larry"},{id:2,petName:"Moe"},{id:3,petName:"Susie Q"}];


    res.render("reservation")

  })
  });
  //Contact Us
  app.get("/contact", function (req, res) {
    res.render("contact")
  })

  //About Us
  app.get("/aboutus", function (req, res) {
    res.render("aboutus")
  })


  


  //   //db.Pet.findAll({where:{UserId:req.user.id}}).then(function(petData){
  //     var petData=[{id:1,petName:"Larry"},{id:2,petName:"Moe"},{id:3,petName:"Susie Q"}];

  //     res.render("reservation",{"pets":petData})
  //   });
    
  // });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
