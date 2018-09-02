import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { compose } from 'redux';
import requireAuth from '../../requireAuth';
import { Redirect,Route } from 'react-router-dom';
import { Link } from 'react-bootstrap';

class Header extends Component {
 
  logOut = () => {
    localStorage.removeItem('token');
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="navbar-brand" href="/admin">Logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/appType">
            Manage App Types
          </NavItem>
          <NavItem href="/categorytype">
            Manage App Category
          </NavItem>
          <NavItem href="/addapk">
            Add New Apk
          </NavItem>
        </Nav>
        <Nav pullRight>
          { this.props.auth ?
              <NavItem  href="/admin" onClick={ () => {localStorage.removeItem('token')} }>
                Sign Out
              </NavItem>
             : ''
          }
        </Nav>
      </Navbar>
    )
  }
}

function mapStatetoprops(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStatetoprops)(Header);