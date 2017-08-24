import React from 'react';
import Search from './Search';

const Results = (props) => {
  return (
    <br>
<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-left">
    <header className="top">
      <ul>
        {props.articles.map((article, index) => {
           let title= article.headline.main;
           let url = article.web_url;
            return (
                <li key={index}>
                    {article.headline.main}<button onClick={() => props.saveArticle(title, url)}> Save Article</button> 
                </li>
            );
        })}
      </ul>
    </header>
    </div>
    </div>
  )
}

export default Results;