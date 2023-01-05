
import React, { Component } from 'react'; //different
import logo from './Bears.png';
import './App.css';
import Page from './Page';

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
         <Page/>
         
        </header>
      </div>
    );

  }
 
};

export default App;
