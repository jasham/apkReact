import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { compose } from 'redux';
import './main.css';

class Login extends Component {

  onSubmit = formProps =>{
    console.log(formProps);
    this.props.signup(formProps,() => {
      this.props.history.push('/admin');
    });
  };
  render(){
    const { handleSubmit } = this.props;
    return(
      <div className="login backgroundMainPage">

        <div className="box">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <label className="labelWidth">Username</label>
              <Field
                className="inputBox"
                name="username"
                type="text"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <fieldset>
              <label className="labelWidth">Password</label>
              <Field
                className="inputBox"
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
            </fieldset>
            <div className="loginButton">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'admin' })
)(Login);
