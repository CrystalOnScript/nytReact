var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  web_url: {
    type: String
  }
});

var Articles = mongoose.model("Articles", ArticlesSchema);
module.exports = Articles;
