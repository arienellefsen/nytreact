var React = require("react");
import Results from './Results';


// This is the History component. It will be used to show a log of  recent searches.
var Saved = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-left">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.display.map((search, i)=> {
             let id= search._id;
            return (
              <div>
              <p key={i}>{search.title}</p><button onClick={() => {
                
                this.props.deleteArticle(id)
                
                
                }}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;