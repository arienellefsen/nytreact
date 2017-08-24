import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Results2 from './Results2';

import Saved from './Saved';

var helpers = require("./utils/helpers");

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this);

        // getinitialState
        this.state = {
            articles: [],
            saved: []
        };
    }

   

    componentDidMount() {
        console.log('Component did mount!');
    }

    componentDidUpdate() {
        console.log('Component did update!');
        
    }

    saveArticle(title, url){
        let arrArt=[];
        //arrArt.push(key);
        console.log('key:' + arrArt);
        //const saved = {...this.state.saved};
         helpers.saveArticle(title, url)
        {
            this.setState({ 
                saved:title,
                url: url
        });
        };
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
                        <Saved 
                            name="Sara" 
                         />
                         <Results2/>
                    </div>
                </div>
            </div>

            )
        }
    }

export default Main;
