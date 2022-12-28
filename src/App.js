
import React, { Component } from 'react'; //different
import logo from './Bears.png';
import './App.css';
import {Line} from 'react-chartjs-2';
import Page from './Page.js'

class App extends React.Component {
  
  constructor(){
    super();
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logo'>
            <img className='logo' src={logo} alt="bears logo" /> 
          </div>
          <Page p1></Page>
         
        </header>
      </div>
    );

  }
 
};

export default App;
