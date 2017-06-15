
// Include React
var React = require("react");


// Helper for making AJAX requests to our API
var helpers = require(".././utils/helpers");

// Creating the Main component
var Save = React.createClass({

  getInitialState: function() {
    return { result:[]};
  },
 // This function will respond to the user input
   componentDidMount: function() {
    this.getArticles();
  },
getArticles: function() {

    helpers.getSave().then(function(response) {
      if (response !== this.state.result) {
        console.log("Saved Articles", response.data);
        this.setState({ result: response.data });
      }
    }.bind(this));
  },



handleDelete: function(search) {

  console.log("delete", search);

    helpers.deleteSave(search.title).then(function(data) {
       this.getArticles();

    }.bind(this));



  },


  // Here we render the function
  render: function() {
       var that = this;
    return (
    <div>

    <div className="row">
          <div className="col-md-12">
             <div className="panel panel-default">
                <div className="panel-heading">
                     <h3 className="panel-title text-center">Saved Articles</h3>
                </div>

                {this.state.result.map(function(search, i) {
                        return (

                             <div key={i} className="panel panel-default">
                              <div  className="panel-body text-center">
                                <h2>{search.title}</h2>
                                <p>Publication Date: {search.date}</p>
                                <p>Web URL:
                                <a href="{search.web_url}"> {search.web_url}</a>
                                </p>

                            <button className="btn btn-primary" type="submit" onClick={that.handleDelete.bind(that, search)}>DELETE</button>



                            </div>


                            </div>
                        );
                })}

                </div>
            </div>
    </div>

   </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Save;
