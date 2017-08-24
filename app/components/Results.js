import React from 'react';
import Search from './Search';



const Results = (props) => {
  return (

    <header className="top">
      <h1>Results here</h1>
      <ul>
        {props.articles.map((article, index) => {
           var title= article.headline.main;
           var url = article.web_url;
            return (
                <li key={index}>
                    {article.headline.main}<button onClick={() => props.saveArticle(title, url)}> Save Article</button> 
                </li>
            );
        })}
      </ul>
    </header>
  )
}

export default Results;