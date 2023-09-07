
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <LoadingBar
        // height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key=" general"  pageSize={this.pageSize} county="in" category="general" />}>
          </Route>
          <Route exact path="/business"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="business " pageSize={this.pageSize} county="in" category="business" />}>
          </Route>
          <Route exact path="/entertainment"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment " pageSize={this.pageSize} county="in" category="entertainment" />}>
          </Route>
          <Route exact path="/general"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="general " pageSize={this.pageSize} county="in" category="general" />}>
          </Route>
          <Route exact path="/health"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="health " pageSize={this.pageSize} county="in" category="health" />}>
          </Route>
          <Route exact path="/science"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="science " pageSize={this.pageSize} county="in" category="science" />}>
          </Route>
          <Route exact path="/sports"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key=" sports" pageSize={this.pageSize} county="in" category="sports" />}>
          </Route>
          <Route exact path="/technology"  element=
          {<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology " pageSize={this.pageSize} county="in" category="technology" />}>
          </Route>
        </Routes>
        </Router>
        {/* <NewsItem></NewsItem> */}
      </div>
    )
  }
}


