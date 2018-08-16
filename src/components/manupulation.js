import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Manupulation extends Component {
  render(){
    return <div>Administrator Page <button>Log Out</button> </div>
  }
}

export default (requireAuth(Manupulation));
