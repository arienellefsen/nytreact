// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
// Geocoder API
var geocodeAPI = "8db9304cb24d4d8a8c65851752d38ae5";
// Helper functions for making API Calls
var helper = {
    // This function serves our purpose of running the query to geolocate.
    runQuery: function(term, start, end) {
        // Figure out the geolocation
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + geocodeAPI + "&q=" + term + "&page=3&begin_date=" + start + "&end_date=" + end;
        console.log("#####" + queryURL);
        return axios.get(queryURL).then(function(response) {
            // If get get a result, return that result's formatted address property
            console.log(response.data);
            return response.data;
        });
    },

    // This function posts new articles to our database.
    saveArticle: function(title, url) {
        console.log('my function received ' + title + " url " + url);
        return axios.post("/saved", {
            title: title,
            url: url
        });
    },

    getArticle: function() {
        console.log('display saved articles');
        return axios.post("/display");
    }
};


// We export the API helper
module.exports = helper;