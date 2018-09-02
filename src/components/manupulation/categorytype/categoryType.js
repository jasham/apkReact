import React, { Component } from 'react';
import '../manupulation.css'
import NavBarComponent from '../navigation/navBarComponent';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

class CategoryType extends Component {
  onSubmit = () => {
    console.log("Hello");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <NavBarComponent/>
        <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-2 sidenav">
            <div>
              <Link to="/appType">App Type</Link>
            </div>
            <div>
              <Link to="/categorytype">Category Type</Link>
            </div>
            <div>
              <Link to="/admin/page">Add Apk</Link>
            </div>
            </div>
            <div className="col-sm-10 text-left">
            <div className="container main">
              <div className="row">
                <div className="col-sm-6 leftSide">
                  <div className="col-sm-6 inputBoxPadding">
                    <input className="form-control" placeholder="Enter APK name..."/>
                  </div>
                  <div className="col-sm-6 submitButtonPadding">
                    <button className="btn btn-primary submitButton">Search</button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="rightButtons">
                    <button name="deleteitem" className="btn btn-primary">Delete Item</button>
                  </div>
                  <div className="rightButtons">
                    <button name="updateItem" className="btn btn-primary">Update Item</button>
                  </div>
                  <div className="rightButtons">
                    <button name="addItem" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add item</button>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add Apk</h4>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleSubmit(this.onSubmit)} className="formSetting">
                        <fieldset>
                          <div className="col-sm-12">
                            <div className="col-sm-6">
                              <label className="labelWidth">Type</label>
                            </div>
                            <div className="col-sm-6">
                              <Field name="foo" component="select" className="form-control selectBox">
                                <option>App</option>
                                <option>Games</option>
                              </Field>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div className="col-sm-12">
                            <div className="col-sm-6">
                              <label className="labelWidth">Category</label>
                            </div>
                            <div className="col-sm-6">
                              <Field name="foo" component="select" className="form-control selectBox">
                                <option>App</option>
                                <option>Games</option>
                              </Field>
                            </div>
                          </div>
                        </fieldset>
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
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid text-center">
          <p>Footer Text</p>
        </footer>
      </div>
    )
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'admin' })
)(CategoryType);
