import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import NavBar from './components/NavBar'
import Search from './components/Search'
import ImagesResults from './components/ImagesResults'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <NavBar />
      <Search />

    </MuiThemeProvider>
    );
  }
}

export default App;
