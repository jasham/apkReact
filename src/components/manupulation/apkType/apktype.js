/*import React, { Component } from 'react';
import '../manupulation.css'
import NavBarComponent from '../navigation/navBarComponent';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import { Radio, Modal, Button, FieldGroup, FormControl } from 'react-bootstrap';
import requireAuth from '../../requireAuth';


class ApkType extends Component {

  state = {
      modalStatus:false,
      selectedAppType : '',
      temporaryAppTypevalue : '',
      selectedAppTypeId : '',
      modalStatus2 : false,
      appValueToAdd : ''
  };

  resertValues = () => {
    this.setState({selectedAppType : ''})
    this.setState({temporaryAppTypevalue : ''})
    this.setState({selectedAppTypeId : ''})
    this.setState({appValueToAdd : ''})

  }

  componentDidMount(){
    this.props.appType()
    this.resetValues
    setInterval(this.props.refreshToken,890000)
  }

  componentDidUpdate(){
    this.props.appType();
    this.resetValues
  }

  onSubmit = formProps => {
    this.props.signup(formProps,() => {
      this.props.history.push('/admin');
    });
  };

  onUpdateItem = () => {
    this.setState({ modalStatus : true});
  }

  modalCloseStatus = () => {
    this.setState({ modalStatus : false});
    this.setState({ modalStatus2 : false});
  }

  changedAppTypeValue = (event) => {
    this.setState({ temporaryAppTypevalue : event.target.value })
  }
  changedAppTypeValue2 = (event) => {
    this.setState({ appValueToAdd : event.target.value })
  }

  updateAppType = () => {
    const updateApp = {
      id : this.state.selectedAppTypeId,
      appType : this.state.temporaryAppTypevalue
    }
    this.props.updateAppTypeData(updateApp);
    this.setState({modalStatus: false})
  }

  addAppType = () => {
    const updateApp = {
      appType : this.state.appValueToAdd
    }
    this.props.addAppTypeData(updateApp);
    this.setState({modalStatus2: false})
  }

  renderModal = () => {
    if (this.state.selectedAppTypeId !== '') {
      return (
          <div className="static-modal">
            <Modal show={this.state.modalStatus}>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormControl
                  type="text"
                  value={this.state.temporaryAppTypevalue}
                  placeholder="Enter text"
                  onChange={this.changedAppTypeValue}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.modalCloseStatus}>Close</Button>
                <Button bsStyle="primary" onClick={this.updateAppType}>Save changes</Button>
              </Modal.Footer>
            </Modal>
          </div>
      );
    }
  }
  renderApkModal = () => {
    return (
        <div className="static-modal">
          <Modal show={this.state.modalStatus2}>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl
                type="text"
                value={this.state.appValueToAdd}
                placeholder="Enter text"
                onChange={this.changedAppTypeValue2}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.modalCloseStatus}>Close</Button>
              <Button bsStyle="primary" onClick={this.addAppType}>Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
  sending = (e) => {
    this.setState({ selectedAppType : e.target.value})
    this.setState({ temporaryAppTypevalue : e.target.value })
    this.setState({ selectedAppTypeId : e.target.id })
  }

  renderApptype = (data) =>  {
    if(data!=null){
      return (
        <tr key={data.id}>
          <td key={data.id}>
            <Radio name="radioGroup" id={data.id} onChange={ (e) => { this.sending(e) } } value={data.appType}>{data.appType}</Radio>
          </td>
        </tr>
      );
    }
  }

  addApkType = () => {
    this.setState({ modalStatus2 : true});
  }

  deleteItem = () => {
    const appId = {
      id : this.state.selectedAppTypeId
    }
    this.props.deleteApkType(appId);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-10 text-left">
            <div className="container main">
              <div className="row">
                <div className="col-sm-6 leftSide">
                  <div className="col-sm-6 inputBoxPadding">
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="rightButtons">
                    <button name="deleteitem" className="btn btn-primary" onClick={this.deleteItem}>Delete Item</button>
                  </div>
                  <div className="rightButtons">
                    <button name="updateItem" className="btn btn-primary" onClick={this.onUpdateItem} >Update Item</button>
                    {this.renderModal()}
                  </div>
                  <div className="rightButtons">
                    <button name="addItem" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.addApkType}>Add item</button>
                    {this.renderApkModal()}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>App Type</th>
                        </tr>
                      </thead>
                      <tbody>
                          { this.props.data != null ? this.props.data.map(this.renderApptype) : null }
                      </tbody>
                    </table>
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

function mapStateToProps(state){
  return {
    data : state.auth.appTypedata,
    selectedAppTypeId : state.appId.authenticated
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'admin' })
)(requireAuth(ApkType));
*/