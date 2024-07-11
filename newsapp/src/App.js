import './App.css';

import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={5} country="us" category="general"/>} />
          <Route path="/business" element={<News key="business" pageSize={5} country="us" category="Business"/>} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="us" category="Entertainment"/>} />
          <Route path="/general" element={<News key="general" pageSize={5} country="us" category="general"/>} />
          <Route path="/health" element={<News key="health" pageSize={5} country="us" category="Health"/>} />
          <Route path="/science" element={<News key="science" pageSize={5} country="us" category="Science"/>} />
          <Route path="/sports" element={<News key="sports" pageSize={5} country="us" category="Sports"/>} />
          <Route path="/technology" element={<News key="technology" pageSize={5} country="us" category="Technology"/>} />
        </Routes>
      </Router>
      </div>
    )
  }
}
