import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Health() {
    const [results, setResults] = useState([])
    useEffect(() => {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=a6e5f04eaae94bb9973bd0aa14b01d5e')
            .then(response => {
            console.log(response.data);
            setResults(response.data.articles)
            });
        }, []);
    return (
        <div className="container d-flex align-items-center">
            <h1>Health News: </h1>
            <ul>
            {results.map(result => (
                <li key={result.title}>
                    <a href={result.url} >{result.title}</a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Health;