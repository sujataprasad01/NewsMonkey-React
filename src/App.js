
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { useState } from 'react';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App = (props)=>{

  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress]=useState(0)
  
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <LoadingBar
        // height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element=
          {<News setProgress={setProgress} apiKey={apiKey} key=" general"  pageSize={pageSize} county="in" category="general" />}>
          </Route>
          <Route exact path="/business"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="business " pageSize={pageSize} county="in" category="business" />}>
          </Route>
          <Route exact path="/entertainment"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="entertainment " pageSize={pageSize} county="in" category="entertainment" />}>
          </Route>
          <Route exact path="/general"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="general " pageSize={pageSize} county="in" category="general" />}>
          </Route>
          <Route exact path="/health"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="health " pageSize={pageSize} county="in" category="health" />}>
          </Route>
          <Route exact path="/science"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="science " pageSize={pageSize} county="in" category="science" />}>
          </Route>
          <Route exact path="/sports"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key=" sports" pageSize={pageSize} county="in" category="sports" />}>
          </Route>
          <Route exact path="/technology"  element=
          {<News setProgress={setProgress} apiKey={apiKey} key="technology " pageSize={pageSize} county="in" category="technology" />}>
          </Route>
        </Routes>
        </Router>
        {/* <NewsItem></NewsItem> */}
      </div>
    )
  
}

export default App
