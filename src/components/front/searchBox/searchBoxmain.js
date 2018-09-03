import React from 'react';
import Search from '../searchBox/searchBox';
import classes from './search.css'
const searchBoxmain = () => {
  return (
    <div className={ classes.box }>
      <Search/>
    </div>
  )
};

export default searchBoxmain;
