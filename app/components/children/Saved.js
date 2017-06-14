var React = require("react");
// var helpers = require(".././utils/helpers.js");
// Creating the Results component
var Saved = React.createClass({

  componentDidUpdate: function() {
    console.log("I have updated")

  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Saved Articles</h1>
          <p>{this.props.articles}</p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
