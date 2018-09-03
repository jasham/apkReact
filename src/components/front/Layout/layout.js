import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Casa from '../casaroule/casaroule';
import Search from '../searchBox/searchBoxmain';
import classes from "./layout.css"
import SocialBox from '../socialBox/socialBox'
import Discover from '../discover/discover';
import Category from '../popularcategory/pCategory';
import Papps from '../pApps/pApps';

export const Layout = () => (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8} lg={9} className={classes.side}>
          <Casa/>
        </Col>
        <Col xs={6} md={4} lg={3} className={classes.searchCss}>
          <Search/>
        </Col>
        <Col xs={6} md={4} lg={3} className={classes.searchCss}>
          <SocialBox/>
        </Col>
      </Row>
       <Row className="show-grid">
          <Col xs={12} md={8} lg={9} className={classes.discoverCss} >
            <Discover/>
          </Col>
          <Col xs={6} md={4} lg={3} className={classes.categoryCss}>
            <Category/>
          </Col>
          <Col xs={12} md={8} lg={9} className={classes.pAppsCss}>
            <Papps/>
          </Col>
      </Row>
    </Grid>
);

