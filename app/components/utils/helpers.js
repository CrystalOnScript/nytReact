// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// nyt API
var nytAPIkey = "a986d0483bf54f30a9b3d059984a74e6";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(searchTerm) {
    // , srtDate, endDate

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPIkey + "&q=" + searchTerm;
    // + "&begin_date=" + srtDate + "0101&end_date=" + endDate + "0101";
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

  saveArticle: function(title, web_url, date){

      console.log(title, web_url, date)


  },

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
