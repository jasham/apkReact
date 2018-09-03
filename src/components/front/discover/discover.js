import React from 'react';
import Search from '../searchBox/searchBox';
import classes from './discover.css';
import { SocialIcon } from 'react-social-icons';
import { Grid, Row, Col} from 'react-bootstrap';

const discover = () => {
  return (
    <div className={ classes.box }>
      <div className = { classes.title_box }>Discover >> </div>
    </div>
  )
};

export default discover;
