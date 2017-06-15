// Include React
var React = require("react");
var helpers = require(".././utils/helpers.js")
// Creating the Results component
var Results = React.createClass({

  getInitialState: function(){

    return {

        articlesFound: [],
    }
  },

  componentDidUpdate: function() {
    console.log("I have updated")
    console.log(this.props.articlesFound)
    var data = this.props.articlesFound
  },

  handleSave: function(search) {

  console.log(search);

    helpers.postSave(search.title, search.date, search.web_url).then(function(data) {
     console.log("UPDATED")
    }.bind(this));



  },

  // Here we describe this component's render method
  render: function() {
    var that = this;
    return (

    <div className="row">
      <div className="col-md-12">
         <div className="panel panel-default">
            <div className="panel-heading">
                 <h3 className="panel-title text-center">Articles Found</h3>
            </div>

            {this.props.articlesFound.map(function(search, i) {
                    return (
                        <div>

                         <div key={i} className="panel panel-default">
                          <div  className="panel-body text-center">
                            <h2>{search.title}</h2>
                            <p>Publication Date: {search.date}</p>
                            <p>Web URL:
                            <a href="{search.web_url}"> {search.web_url}</a>

                       </p>
                         <button className="btn btn-primary" type="submit" onClick={that.handleSave.bind(that, search)}>SAVE</button>



                        </div>


                        </div>
                        </div>
                    );
            })}

            </div>
        </div>

</div>
)
  }
});

// Export the component back for use in other files
module.exports = Results;
