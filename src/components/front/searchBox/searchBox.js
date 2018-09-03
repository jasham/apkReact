import React from 'react';
import { FormGroup, FormControl, InputGroup,form, Button } from 'react-bootstrap';
import classes from './search.css'


const search = () => (
  <form className= { classes.searchElement }>
  <FormGroup>
  <InputGroup>
    <FormControl type="text" />
    <InputGroup.Button>
      <Button className={classes.button}><i class="fa fa-search" aria-hidden="true"></i></Button>
    </InputGroup.Button>
  </InputGroup>
</FormGroup>
  </form>
);

export default search;
