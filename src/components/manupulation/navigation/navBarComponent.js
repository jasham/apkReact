import React from 'react';

const navBarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Logo</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Sign Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default navBarComponent;
