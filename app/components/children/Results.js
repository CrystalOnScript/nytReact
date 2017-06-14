// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({

  getInitialState: function(){

    return {
      title: "",
      web_url: "",
      date: "",
    }
  },


  // Here we describe this component's render method
  render: function() {
      console.log("results side:",this.props.articlesFound);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Articles:</h1>
          <p>{this.props.articlesFound}</p>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
