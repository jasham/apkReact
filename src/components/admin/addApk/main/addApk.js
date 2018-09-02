import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import requireAuth from '../../../requireAuth';
import { Radio, Button, Table, tr, th, thead, tbody, Grid, Row, Col } from 'react-bootstrap';
import { AddButton} from '../addButton/addButton';
import { AppTypeTable } from '../table/table';
import { AppTypeModal } from '../modal/modal';
import { UpdateModal } from '../modal/updateModal';

class AddApk extends Component {

    componentDidMount(){
        this.props.appType()
        this.props.getAllApkData()
    }
    
    state = {
        modalStatus : false,
        appTypeName : '',
        appValueToAdd : '',
        dataLength : '',
        selectedAppType : '',
        temporaryAppTypevalue : '',
        selectedAppTypeId : '',
        updateModalStatus : false,
        
        selectedApkId : '',
        selectedAppTypeId : '',
        selectedAppTypeName : '',
        selectedCategoryId : '',
        selectedCategoryName : '',
        apkName : '',
        description : '',
        apkUploadPath : ''
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

                specificapkGetData = { this.props.specificapkGetData }
                selectedApkId = { this.state.selectedApkId }
                apkName = { this.state.apkName }
                selectedAppTypeId = { this.state.selectedAppTypeId }
                selectedAppTypeName = { this.state.selectedAppTypeName }
                selectedCategoryId = { this.state.selectedCategoryId }
                selectedCategoryName = { this.state.selectedCategoryName }
                description = { this.state.description }
                apkUploadPath = { this.state.apkUploadPath }
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
        this.setState({ selectedApkId : e},() => { this.props.getSpecificApkData(this.state.selectedApkId) })


        
       // this.setState({ temporaryAppTypevalue : e.target.value })
       // this.setState({ selectedAppTypeId : e.target.id })
    }

    deleteItem = () => {
        const appId = {
          id : this.state.selectedAppTypeId
        }
        this.props.deleteApkType(appId);
    }
    
    onUpdateItem = () => {
        this.setState({ updateModalStatus : true});
        this.setState({ selectedApkId : this.props.specificapkGetData.id })
        this.setState({ apkName : this.props.specificapkGetData.apkName })
        this.setState({ selectedAppTypeId : this.props.specificapkGetData.app_type.id })
        this.setState({ selectedAppTypeName : this.props.specificapkGetData.app_type.appType })
        this.setState({ selectedCategoryId : this.props.specificapkGetData.category_type.id })
        this.setState({ selectedCategoryName : this.props.specificapkGetData.category_type.categoryName })
        this.setState({ description : this.props.specificapkGetData.description })
        this.setState({ apkUploadPath : this.props.specificapkGetData.upload_path })      
    }
    

    appTypeValue = (event) => {
        this.setState({ apkName : event.target.value })
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
                            <h1>Manage All APK</h1>
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
                            data={ this.props.apkData } 
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
        appTypeStatus : state.appTypeStatus.status,
        apkData : state.allApkdata,
        specificapkGetData : state.specificapkGetData.specificapkGetData

    }
}

export default connect(mapStateToProps,actions)(requireAuth(AddApk));