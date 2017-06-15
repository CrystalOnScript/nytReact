// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", strDate: "", endDate: "", result:[] };
  },

  // This function will respond to the user input
  handleSearchChange: function(event) {

    this.setState({ term: event.target.value });

  },

  handleStrDateChange: function(event) {

    this.setState({ strDate: event.target.value });

  },

  handleEndDateChange: function(event) {

    this.setState({ endDate: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    console.log("term",this.state.term)
    this.props.setStrDate(this.state.strDate);
    console.log("strDate", this.state.strDate);
    this.props.setEndDate(this.state.endDate);
    console.log("endDate", this.state.endDate);
    // this.setState({ term: "", strDate: "", endDate: "" });
  },
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleSearchChange}
                required
              />
              <h4 className="">
                <strong>Start Year</strong>
              </h4>
              <input
                value={this.state.srtDate}
                type="text"
                className="form-control text-center"
                id="strDate"
                onChange={this.handleStrDateChange}
                required
              />
              <h4 className="">
                <strong>End Year</strong>
              </h4>
              <input
                value={this.state.endDate}
                type="text"
                className="form-control text-center"
                id="endDate"
                onChange={this.handleEndDateChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
