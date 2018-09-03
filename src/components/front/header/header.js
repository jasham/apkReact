import React from 'react'
import classes from './header.css'
import Head from './head.js'
import Menu from './menu.js'
import logo from './images/logo_new.png'
import android from './images/android.png'
import cube from './images/cube.png'
import joystick from './images/joystick.png'
import star from './images/star.png'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap'

const head = () => (
  <Navbar className={classes.navbar_header}>
    <Navbar.Header>
      <Navbar.Brand className={classes.navbar_logo}>
         <Image src={ logo }/>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight className={classes.nav_menu}>
      <NavItem href="#" className={classes.image_games}>
        GAMES
      </NavItem>
      <NavItem eventkey={2} className={classes.image_android}>
        APPS
      </NavItem>
      <NavItem eventkey={4} className={classes.google} id="google_translate_element">
      </NavItem>
    </Nav>
  </Navbar>
);
export default head;
