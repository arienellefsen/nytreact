import React from 'react';

var helpers = require("./utils/helpers");

class Search extends React.Component {
    constructor(props) {
        super(props);
        // add this binding to make sure we can access this.props inside of the
        // getArticles function, which is a custom function on this component
        this.getArticles = this.getArticles.bind(this);
    }

    getArticles(event) {
        const {
            id,
            onDataReceived
        } = this.props;

        // The above code means the same as this:
        // const onDataReceived = this.props.onDataReceived;

        event.preventDefault();

        //Create a object to hold my form data
        const article = {
            term: this.term.value,
            start: this.start.value,
            end: this.end.value
        }
        
        //Create variables to pass as arguments
        const term = article.term,
            start = article.start,
            end = article.end;

        //Run helper function to call api
        helpers
        .runQuery(term, start, end)
        .then((data) => {
            console.log(data);
            if (typeof onDataReceived === 'function') {
                onDataReceived(data.response.docs);
            }
        });

        console.log(article);
    }

    render() {
        return (
            <form ref={(input) => this.searchFormForm = input} className="fish-edit" onSubmit={(e) => this.getArticles(e)}>
                <input ref={(input) => this.term = input} type="text" placeholder="New jersey" />
                <input ref={(input) => this.start = input} type="text" placeholder="20170509" />
                <input ref={(input) => this.end = input} type="text" placeholder="20170809" />
                <button type="submit" >Search</button>
            </form>
        );
    }

};

export default Search;


