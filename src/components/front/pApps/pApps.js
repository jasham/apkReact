import React from 'react';
import Search from '../searchBox/searchBox';
import classes from './pApps.css';
import { SocialIcon } from 'react-social-icons';
import { Grid, Row, Col} from 'react-bootstrap';

const pApps = () => {
  return (
    <div className={ classes.box }>
      <div className = { classes.title_box }>Popular Apps >> </div>
    </div>
  )
};

export default pApps;
