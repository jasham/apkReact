import React, { Component } from 'react';
import './main.css';
import Header from './components/commonComponents/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
