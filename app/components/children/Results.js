// Include React
var React = require("react");
var helpers = require(".././utils/helpers.js")
// Creating the Results component
var Results = React.createClass({

  getInitialState: function(){

    return {
      title: "",
      web_url: "",
      date: "",
    }
  },

  componentDidUpdate: function() {
    console.log("I have updated")
    console.log(this.props.articlesFound)
    var data = this.props.articlesFound
  },



  // Here we describe this component's render method
  render: function() {
      console.log("results side:",this.props.articlesFound);
      var articlesList = this.props.articlesFound.map(function(data, i){
        return( <div className="row" className="artResults" key={i}>
            <form>
              <p id="title" vaue={data.title}>{data.title}</p>
              <p id="web_url" value={data.web_url}>{data.web_url}</p>
              <p id="date" value={data.date}>{data.date}</p>
              <button type="button" className="btn btn-primary">Save</button>
            </form>
            </div>)
      })
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Articles:</h1>
          {articlesList}

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
