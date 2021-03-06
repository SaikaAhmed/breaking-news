import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [ articles, setArticles ] = useState([]);

    useEffect( () => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d281c91334fa4b398d88563d4316cbdd"
        fetch(url)
        .then( res => res.json())
        .then(data => setArticles(data.articles))
     }, [])
    
    return (
        

        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;