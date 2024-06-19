import './App.css';

import React, { Component } from 'react'
import NewsItem from './components/NewsItem';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
}
