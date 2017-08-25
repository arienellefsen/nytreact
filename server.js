// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Require History Schema
const History = require("./models/History");
const Article = require("./models/Article");


// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// MongoDB Configuration configuration (Change this URL to your own DB)
//mongoose.connect("mongodb://localhost/nytreact");
mongoose.connect("mongodb://heroku_5gqbr01v:dcki2lo13prsmul766mkk1ve88@ds159493.mlab.com:59493/heroku_5gqbr01v");

const db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});



// -------------------------------------------------
//Database config
require("./config/connect_db.js");

// -------------------------------------------------
// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

require("./controllers/router.js")(app);


// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});