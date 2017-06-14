// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// nyt API
var nytAPIkey = "a986d0483bf54f30a9b3d059984a74e6";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(searchTerm) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPIkey + "&q=" + searchTerm;
    console.log("queryURL", queryURL);
    return axios.get(queryURL).then(function(response) {

      console.log("this is query response:", response.data.response.docs);
      var articlesReturn = []
      for (var i=0; i<10; i++){
           articlesReturn.push(
              {
               web_url: response.data.response.docs[i].web_url,
               title: response.data.response.docs[i].headline.main,
               date: response.data.response.docs[i].pub_date,
             });


      }
      return articlesReturn;
    });

  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
