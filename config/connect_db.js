var mongoose = require("mongoose");

module.exports = function(db) {
    // MongoDB Configuration configuration (Change this URL to your own DB)
    mongoose.connect("mongodb://localhost/nytreact");
    var db = mongoose.connection;

    db.on("error", function(err) {
        console.log("Mongoose Error: ", err);
    });

    db.once("open", function() {
        console.log("Mongoose connection successful.");
    });
};