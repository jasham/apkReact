import React from 'react';
import Search from '../searchBox/searchBox';
import classes from './socialBox.css';
import { SocialIcon } from 'react-social-icons';
import { Grid, Row, Col} from 'react-bootstrap';

const socialBox = () => {
  return (
    <div className={ classes.box }>
      <div className = { classes.title_box }>Follow APKPure</div>
      <div xs={12} md={12} lg={12} className={classes.socialTab}>
        <Col xs={4} md={4} lg={4}>
          <SocialIcon url="http://twitter.com/jaketrent" />
        </Col>
        <Col xs={4} md={4} lg={4} >
          <SocialIcon url="http://facebook.com/jaketrent" />
        </Col>
        <Col xs={4} md={4} lg={4} >
          <SocialIcon url="http://plus.google.com/jaketrent" />
        </Col>
      </div>
    </div>
  )
};

export default socialBox;
