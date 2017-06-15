// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// nyt API
var nytAPIkey = "a986d0483bf54f30a9b3d059984a74e6";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(searchTerm, searchSrtDate, searchEndDate) {
    // , srtDate, endDate

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPIkey + "&q=" + searchTerm + "&begin_date=" + searchSrtDate + "0101&end_date=" + searchEndDate + "0101";;

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

  },

  postSave: function(title, date, web_url) {
       return axios.post("/api", {
           title: title,
           date: date,
           web_url: web_url
       });
   },

   getSave: function() {
        return axios.get("/api");
    },
    deleteSave: function(title) {
        console.log(title);
        return axios.post("/api/delete", {
            title: title

        });
    },

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
