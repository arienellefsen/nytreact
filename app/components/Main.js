import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Saved from './Saved';

const helpers = require("./utils/helpers");

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);

        // getinitialState
        this.state = {
            articles: [],
            title: '',
            url: '',
            display: []
            // display: [{"_id":"599f500c78c6fb5ec532dd60","title":"Penn Station Repairs Are Halfway Done as Riders Adapt to New Routes","date":"2017-08-24T22:15:40.517Z","url":"https://www.nytimes.com/2017/07/28/nyregion/penn-station-repairs-commute.html","__v":0},{"_id":"599f500b78c6fb5ec532dd5f","title":"You Talkin’ to Me? Trump’s White House Gets Some New York Attitude","date":"2017-08-24T22:15:39.957Z","url":"https://www.nytimes.com/2017/07/28/us/politics/donald-trump-anthony-scaramucci-new-york.html","__v":0}]
        };
    }

    componentDidMount() {
        console.log('Component did mount!');
        helpers.getArticle().then(function(response) {
            console.log(response);
      if (response !== this.state.display) {
            console.log("display", response.data);

            //Set State for display
            this.setState({ display: response.data });
      }
    }.bind(this));
  }
    

    componentDidUpdate() {
        console.log('Component did update!');
        helpers.getArticle().then(function(response) {
            console.log(response);
      if (response !== this.state.display) {
            console.log("display", response.data);

            //Set State for display
            this.setState({ display: response.data });
      }
    }.bind(this));
        
    }

    saveArticle(title, url){
        let arrArt=[];
        //arrArt.push(key);
        console.log('key:' + arrArt);
        //const saved = {...this.state.saved};
         helpers.saveArticle(title, url)
        {
            this.setState({ 
                title:title,
                url: url
        });
        };
    }   

deleteArticle(id){
    helpers.deleteArticle(id, (response) => {
        var display = this.state.display;
        // make a new array that does not contain the deleted article
        // set state.display to the new array without the deleted article
        var filter = display.filter((item) => item._id !== id);
        console.log(filter);
        
        this.setState({ 
                display:filter
        });
    });
}

 
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className=" col-sm-12 col-md-12">
                        <Header tagline="Daily News"/>
                        <Search
                            id={Math.random() * 9999}
                            onDataReceived={(data) => {
                                this.setState({
                                    articles: data 
                                });
                            }}
                        />
                        <Results articles={this.state.articles} saveArticle={this.saveArticle}/>
                         <Saved display={this.state.display} deleteArticle={this.deleteArticle}/>
                    </div>
                </div>
            </div>

            )
        }
    }

export default Main;
