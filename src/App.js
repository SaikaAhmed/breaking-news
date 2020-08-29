import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
       <h2 style={{textAlign: 'center'}}>Breaking News</h2>
       <Header></Header>
       <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
