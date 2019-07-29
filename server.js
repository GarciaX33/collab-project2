var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();


// PASSPORT
var passport   = require('passport');
var session    = require('express-session');

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// FOR PASSPORT
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Routes
require('./routes/auth.js')(app,passport);



// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/reservation-apiRoutes")(app);
require("./routes/pets-apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// true drops tables and recreates them
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
