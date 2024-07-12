import './App.css';

import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    // const { progress } = this.state;
    return (
      <div>
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general"/>} />
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={5} country="us" category="Business"/>} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={5} country="us" category="Entertainment"/>} />
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country="us" category="General"/>} />
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={5} country="us" category="Health"/>} />
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={5} country="us" category="Science"/>} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={5} country="us" category="Sports"/>} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={5} country="us" category="Technology"/>} />
        </Routes>
      </Router>
      </div>
    )
  }
}
