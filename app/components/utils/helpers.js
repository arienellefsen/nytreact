// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "8db9304cb24d4d8a8c65851752d38ae5";

// Helper functions for making API Calls
var helper = {
    // This function serves our purpose of running the query to geolocate.
    runQuery: function(location) {
        console.log(location);

        // Figure out the geolocation
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + geocodeAPI + "&q=peru";
        console.log("#####" + queryURL);
        return axios.get(queryURL).then(function(response) {
            // If get get a result, return that result's formatted address property
            console.log(response.data);
            return response.data;
        });

    },

    // This function hits our own server to retrieve the record of query results
    getHistory: function() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postHistory: function(location) {
        return axios.post("/api", { location: location });
    }
};

// We export the API helper
module.exports = helper;