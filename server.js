// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Articles = require("./models/Articles");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/week19hw");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.title);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Articles.create({
    title: req.body.title,
    date: req.body.date,
    web_url: req.body.web_url,
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Articles");
    }
  });
});

app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Articles.find({}, function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  })
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
