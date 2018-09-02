import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/index';
import requireAuth from '../../../requireAuth';
import { Radio, Button, Table, tr, th, thead, tbody, Grid, Row, Col } from 'react-bootstrap';
import { AddButton} from '../addButton/addButton';
import { AppTypeTable } from '../table/table';
import { AppTypeModal } from '../modal/modal';
import { UpdateModal } from '../modal/updateModal';

class AppType extends Component {

    componentDidMount(){
        this.props.appType()
    }
    
    state = {
        modalStatus : false,
        appTypeName : '',
        appValueToAdd : '',
        dataLength : '',
        selectedAppType : '',
        temporaryAppTypevalue : '',
        selectedAppTypeId : '',
        updateModalStatus : false
    }
    
    clickAdd = () => {
        this.setState({ modalStatus : true});
        this.modal
    }

    modal = () => {
        return (
            <AppTypeModal 
                showStatus={this.state.modalStatus}
                closeModal={ this.closeModal }
                addAppTypeData={this.props.addAppTypeData}
                appValueToAdd={this.state.appValueToAdd}
                appTypeValue={this.appTypeValue}
                addAppType={this.addAppType}
            />
        )
    }

    updateModal = () => {
        return (
            <UpdateModal
                showStatus={this.state.updateModalStatus}
                closeModal={ this.closeModal }
                appValueToAdd={this.state.appValueToAdd}
                appTypeValue={this.appTypeValue}
                updateAppType={ this.updateAppType }
            />
        )
    }

    updateAppType = () => {
        const updateApp = {
          id : this.state.selectedAppTypeId,
          appType : this.state.appValueToAdd
        }
        this.props.updateAppTypeData(updateApp);
        this.setState({updateModalStatus: false})
    }

    sending = (e) => {
        this.setState({ selectedAppType : e.target.value})
        this.setState({ temporaryAppTypevalue : e.target.value })
        this.setState({ selectedAppTypeId : e.target.id })
    }

    deleteItem = () => {
        const appId = {
          id : this.state.selectedAppTypeId
        }
        this.props.deleteApkType(appId);
    }
    
    onUpdateItem = () => {
        this.setState({ updateModalStatus : true});
    }
    

    appTypeValue = (event) => {
        this.setState({ appValueToAdd : event.target.value })
    }

    addAppType = () => {
        this.props.addAppTypeData({ appType : this.state.appValueToAdd })
        this.setState({ modalStatus : false })
    }

    closeModal = () => {
        this.setState({ modalStatus : false })
        this.setState({ updateModalStatus : false })
    }

    render() {
        return(
            <div className="container">
                <Grid>
                    <Row className="show-grid">
                       <Col className="col-lg-10 col-md-10">
                            <br/>
                            <h1>Manage Application Type</h1>
                            <br/>
                       </Col>
                       <Col className="col-lg-2 col-md-2 pullRight">
                            <br/>
                            <br/>
                            <AddButton addButton={ this.clickAdd } />
                            { this.modal() }
                            <br/>
                       </Col> 
                    </Row>
                    <Row className="show-grid">
                        <AppTypeTable 
                            data={ this.props.data } 
                            sending={ this.sending } 
                            deleteItem={ this.deleteItem }
                            onUpdateItem= { this.onUpdateItem }
                        />
                        { this.updateModal() }
                   </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data : state.auth.appTypedata,
        appTypeStatus : state.appTypeStatus.status
    }
}

export default connect(mapStateToProps,actions)(requireAuth(AppType));