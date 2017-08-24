const Article = require("../models/Article.js");
const request = require('request');

module.exports = function(app) {

    app.get("/display", function(req, res) {
        // We will find all the records, sort it in descending order, then limit the records to 5
        Article.find({}).sort([
            ["date", "descending"]
        ]).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc);
                res.send(doc);
            }
        });
    });

    // This is the route we will send POST requests to save each search.
    app.post("/saved", function(req, res) {
        console.log("BODY: " + req.body);

        // Here we'll save the location based on the JSON input.
        // We'll use Date.now() to always get the current date time
        Article.create({
            title: req.body.title,
            date: Date.now(),
            url: req.body.url
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        });
    });

    app.post("/delete", function(req, res) {
        var id = req.body.id;

        if (!id) {

            return res.json({ error: 'sorry id is undefined!' })
        }
        console.log('id to be deleted:' + id);
        Article.remove({ _id: id }, function(err) {
            if (err) throw err;
            res.redirect('/');
        });
    });
};