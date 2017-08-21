var Article = require("../models/Article.js");
var request = require('request');

module.exports = function(app) {

    app.get("/api", function(req, res) {

        // We will find all the records, sort it in descending order, then limit the records to 5
        History.find({}).sort([
            ["date", "descending"]
        ]).limit(5).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    // This is the route we will send POST requests to save each search.
    app.post("/api", function(req, res) {
        console.log("BODY: " + req.body.location);

        // Here we'll save the location based on the JSON input.
        // We'll use Date.now() to always get the current date time
        History.create({
            location: req.body.location,
            date: Date.now()
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        });
    });


}